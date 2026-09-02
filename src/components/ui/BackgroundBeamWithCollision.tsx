import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type BeamOptions = {
  initialX?: number;
  translateX?: number;
  initialY?: number;
  translateY?: number;
  rotate?: number;
  className?: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
};

type BackgroundBeamsWithCollisionProps = {
  children: ReactNode;
  className?: string;
};

type CollisionMechanismProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  parentRef: React.RefObject<HTMLDivElement | null>;
  beamOptions?: BeamOptions;
};

type CollisionCoordinates = {
  x: number;
  y: number;
};

type CollisionState = {
  detected: boolean;
  coordinates: CollisionCoordinates | null;
};

type ExplosionProps = {
  className?: string;
  style?: CSSProperties;
};

const beams: BeamOptions[] = [
  {
    initialX: 10,
    translateX: 10,
    duration: 15,
    repeatDelay: 3,
    delay: 2,
  },
  {
    initialX: 600,
    translateX: 600,
    duration: 15,
    repeatDelay: 3,
    delay: 4,
  },
  {
    initialX: 100,
    translateX: 100,
    duration: 17,
    repeatDelay: 7,
    className: "h-6",
  },
  {
    initialX: 400,
    translateX: 400,
    duration: 13,
    repeatDelay: 14,
    delay: 4,
  },
  {
    initialX: 800,
    translateX: 800,
    duration: 11,
    repeatDelay: 2,
    className: "h-20",
  },
  {
    initialX: 1000,
    translateX: 1000,
    duration: 9,
    repeatDelay: 2,
    className: "h-12",
  },
  {
    initialX: 1200,
    translateX: 1200,
    duration: 10,
    repeatDelay: 4,
    delay: 2,
    className: "h-6",
  },
];

/**
 * Creates a deterministic pseudo-random number between 0 and 1.
 *
 * This is intentionally deterministic because Math.random() should not
 * be called during React rendering.
 */
const seededRandom = (seed: number): number => {
  const value = Math.sin(seed * 9999) * 10000;

  return value - Math.floor(value);
};

const explosionParticles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  initialX: 0,
  initialY: 0,
  directionX: Math.floor(seededRandom(index + 1) * 80 - 40),
  directionY: Math.floor(seededRandom(index + 21) * -50 - 10),
  duration: seededRandom(index + 41) * 1.5 + 0.5,
}));

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: BackgroundBeamsWithCollisionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`${beam.initialX ?? index}-beam-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full bg-neutral-100"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      />
    </div>
  );
};

const CollisionMechanism = forwardRef<HTMLDivElement, CollisionMechanismProps>(
  ({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef<HTMLDivElement>(null);

    const [collision, setCollision] = useState<CollisionState>({
      detected: false,
      coordinates: null,
    });

    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    useEffect(() => {
      const checkCollision = () => {
        const beamElement = beamRef.current;
        const containerElement = containerRef.current;
        const parentElement = parentRef.current;

        if (
          !beamElement ||
          !containerElement ||
          !parentElement ||
          cycleCollisionDetected
        ) {
          return;
        }

        const beamRect = beamElement.getBoundingClientRect();
        const containerRect = containerElement.getBoundingClientRect();
        const parentRect = parentElement.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;

          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });

          setCycleCollisionDetected(true);
        }
      };

      const animationInterval = window.setInterval(checkCollision, 50);

      return () => {
        window.clearInterval(animationInterval);
      };
    }, [cycleCollisionDetected, containerRef, parentRef]);

    useEffect(() => {
      if (!collision.detected || !collision.coordinates) {
        return;
      }

      const collisionTimeout = window.setTimeout(() => {
        setCollision({
          detected: false,
          coordinates: null,
        });

        setCycleCollisionDetected(false);
      }, 2000);

      const beamTimeout = window.setTimeout(() => {
        setBeamKey((previousKey) => previousKey + 1);
      }, 2000);

      return () => {
        window.clearTimeout(collisionTimeout);
        window.clearTimeout(beamTimeout);
      };
    }, [collision]);

    return (
      <div ref={ref}>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate="animate"
          initial={{
            translateY: beamOptions.initialY ?? "-200px",
            translateX: beamOptions.initialX ?? "0px",
            rotate: beamOptions.rotate ?? 0,
          }}
          variants={{
            animate: {
              translateY: beamOptions.translateY ?? "1800px",
              translateX: beamOptions.translateX ?? "0px",
              rotate: beamOptions.rotate ?? 0,
            },
          }}
          transition={{
            duration: beamOptions.duration ?? 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay ?? 0,
            repeatDelay: beamOptions.repeatDelay ?? 0,
          }}
          className={cn(
            "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-foreground via-secondary to-transparent",
            beamOptions.className,
          )}
        />

        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </div>
    );
  },
);

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ className, style }: ExplosionProps) => {
  return (
    <div className={cn("absolute z-50 h-2 w-2", className)} style={style}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-foreground to-transparent blur-sm"
      />

      {explosionParticles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 1,
          }}
          animate={{
            x: particle.directionX,
            y: particle.directionY,
            opacity: 0,
          }}
          transition={{
            duration: particle.duration,
            ease: "easeOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-secondary to-foreground"
        />
      ))}
    </div>
  );
};
