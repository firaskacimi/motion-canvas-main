import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize2,
} from "lucide-react";
import { heroCenter } from "@/lib/portfolio-data";
import { SectionLabel } from "./Reveal";

const videos = [
  {
    src: "/videos/showreel-01.mp4",
    title: "Showreel",
    category: "Cinematic",
    duration: "02:14",
  },
  {
    src: "/videos/showreel-02.mp4",
    title: "Commercial Work",
    category: "Commercial",
    duration: "01:42",
  },
  {
    src: "/videos/showreel-03.mp4",
    title: "Motion Design",
    category: "Motion",
    duration: "01:58",
  },
  {
    src: "/videos/showreel-04.mp4",
    title: "Visual Experiments",
    category: "Experimental",
    duration: "01:36",
  },

  // You can add more videos here
  {
    src: "/videos/showreel-05.mp4",
    title: "Event Film",
    category: "Events",
    duration: "01:28",
  },
  {
    src: "/videos/showreel-06.mp4",
    title: "Social Campaign",
    category: "Social",
    duration: "00:58",
  },
];

export function Showreel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  /*
   * ----------------------------------------
   * NAVIGATION
   * ----------------------------------------
   */

  const nextVideo = () => {
    setCurrentIndex((current) => (current + 1) % videos.length);
  };

  const previousVideo = () => {
    setCurrentIndex(
      (current) => (current - 1 + videos.length) % videos.length
    );
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  /*
   * ----------------------------------------
   * CALCULATE CARD POSITION
   * ----------------------------------------
   *
   * Example with 6 videos:
   *
   *             FAR LEFT
   *                 ↓
   *       [ 5 ] [ 0 ] [ 1 ] [ 2 ]
   *              ↑
   *            ACTIVE
   *
   * Everything is calculated relative to the
   * active card.
   */

  const getRelativePosition = (index: number) => {
    const total = videos.length;

    let difference = index - currentIndex;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    return difference;
  };

  /*
   * ----------------------------------------
   * KEYBOARD CONTROLS
   * ----------------------------------------
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextVideo();
      }

      if (event.key === "ArrowLeft") {
        previousVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * ----------------------------------------
   * SWIPE / DRAG
   * ----------------------------------------
   */

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    setIsDragging(false);

    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeDistance < -80 || swipeVelocity < -500) {
      nextVideo();
      return;
    }

    if (swipeDistance > 80 || swipeVelocity > 500) {
      previousVideo();
    }
  };

  const activeVideo = videos[currentIndex]!;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[20%] h-125 w-125 rounded-full bg-primary/20 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[30%] h-112.5 w-112.5 rounded-full bg-fuchsia-500/15 blur-[140px]"
        />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Selected Work</SectionLabel>

            <h2 className="font-display mt-5 text-[clamp(2.8rem,8vw,7rem)] leading-[0.9]">
              Watch the Reel
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
            A collection of films, campaigns, events, motion work and visual
            experiments.
          </p>
        </div>
      </div>

      {/* =====================================================
          CAROUSEL
      ====================================================== */}

      <div className="relative mt-14 w-full sm:mt-20">
        <div
          className="
            relative
            h-125
            w-full
            overflow-hidden
            sm:h-140
            lg:h-155
          "
          style={{
            perspective: "1600px",
          }}
        >
          {/* =================================================
              CARDS
          ================================================== */}

          {videos.map((video, index) => {
            const position = getRelativePosition(index);
            const isActive = position === 0;

            /*
             * Don't render infinitely many cards.
             * Only show the active card + 2 cards on each side.
             */
            if (Math.abs(position) > 2) {
              return null;
            }

            /*
             * Position of each card.
             *
             * Center:
             *     0
             *
             * Left:
             *    -1
             *
             * Right:
             *     1
             *
             * Far left:
             *    -2
             *
             * Far right:
             *     2
             */

            const x =
              position === 0
                ? "0%"
                : position === -1
                  ? "-76%"
                  : position === 1
                    ? "76%"
                    : position === -2
                      ? "-145%"
                      : "145%";

            const scale =
              position === 0
                ? 1
                : Math.abs(position) === 1
                  ? 0.84
                  : 0.7;

            const opacity =
              position === 0
                ? 1
                : Math.abs(position) === 1
                  ? 0.55
                  : 0.22;

            const blur =
              position === 0
                ? "blur(0px)"
                : Math.abs(position) === 1
                  ? "blur(1px)"
                  : "blur(3px)";

            return (
              <motion.div
                key={video.src}
                className={`absolute left-1/2 top-1/2 h-97.5 w-[min(78vw,720px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] sm:h-115 lg:h-125 grain group ring-1 ring-white/10 ${isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
                data-video-card
                animate={{
                  x,
                  scale,
                  opacity,
                  filter: blur,
                  zIndex: isActive ? 30 : 20 - Math.abs(position),
                }}
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                    mass: 0.8,
                  },
                  scale: {
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                  },
                  opacity: {
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  filter: {
                    duration: 0.35,
                  },
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.15}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                whileDrag={{
                  scale: 1.02,
                }}
                onClick={() => {
                  if (!isActive && !isDragging) {
                    setCurrentIndex(index);
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* ===========================================
                    VIDEO
                ============================================ */}

                <video
                  src={video.src}
                  poster={heroCenter}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay={isActive}
                  muted
                  loop
                  playsInline
                  preload={isActive ? "auto" : "metadata"}
                />

                {/* ===========================================
                    DARK OVERLAY
                ============================================ */}

                <div
                  className={`
                    absolute inset-0
                    transition-opacity    
                    duration-500
                    ${
                      isActive
                        ? "bg-black/10"
                        : "bg-black/35"
                    }
                  `}
                />

                {/* ===========================================
                    GRADIENT
                ============================================ */}

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-black/20" />

                {/* ===========================================
                    CENTER PLAY
                ============================================ */}

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1,
                    }}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <span
                      className="
                        flex
                        size-20
                        items-center
                        justify-center
                        rounded-full
                        bg-white/95
                        text-black
                        shadow-[0_0_80px_rgba(255,255,255,0.25)]
                        transition-transform
                        duration-500
                        group-hover:scale-110
                        sm:size-24
                      "
                    >
                      <Play className="ml-1 size-7 fill-current" />
                    </span>
                  </motion.div>
                )}

                {/* ===========================================
                    INFO
                ============================================ */}

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="mb-2 block text-[0.6rem] font-medium tracking-[0.3em] text-white/60 uppercase">
                        {video.category}
                      </span>

                      <h3
                        className={`
                          font-display
                          text-2xl
                          text-white
                          sm:text-3xl
                          lg:text-4xl
                        `}
                      >
                        {video.title}
                      </h3>

                      <span className="mt-2 block text-xs tracking-[0.2em] text-white/50 uppercase">
                        {video.duration}
                      </span>
                    </div>

                    {isActive && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();

                          const videoElement =
                            event.currentTarget
                              .closest("[data-video-card]")
                              ?.querySelector("video");

                          if (videoElement) {
                            if (document.fullscreenElement) {
                              document.exitFullscreen();
                            } else {
                              videoElement.requestFullscreen?.();
                            }
                          }
                        }}
                        className="
                          hidden
                          size-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          backdrop-blur-md
                          transition-all
                          hover:scale-110
                          hover:bg-white
                          hover:text-black
                          sm:flex
                        "
                        aria-label="Fullscreen video"
                      >
                        <Maximize2 className="size-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* =================================================
              SIDE FADE
          ================================================== */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-40 w-[12%] bg-linear-to-r from-background to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-40 w-[12%] bg-linear-to-l from-background to-transparent" />
        </div>

        {/* ===================================================
            CONTROLS
        ==================================================== */}

        <div className="relative z-50 mt-2 flex items-center justify-center gap-5 sm:mt-5">
          {/* PREVIOUS */}

          <button
            type="button"
            onClick={previousVideo}
            aria-label="Previous video"
            className="
              flex
              size-12
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background/80
              text-foreground
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
              sm:size-14
            "
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>

          {/* DOTS */}

          <div className="flex items-center gap-2">
            {videos.map((video, index) => {
              const active = index === currentIndex;

              return (
                <button
                  key={video.src}
                  type="button"
                  onClick={() => goToVideo(index)}
                  aria-label={`Go to ${video.title}`}
                  className="group flex h-6 items-center justify-center"
                >
                  <motion.span
                    animate={{
                      width: active ? 32 : 7,
                      opacity: active ? 1 : 0.35,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="block h-1.5 rounded-full bg-foreground"
                  />
                </button>
              );
            })}
          </div>

          {/* NEXT */}

          <button
            type="button"
            onClick={nextVideo}
            aria-label="Next video"
            className="
              flex
              size-12
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background/80
              text-foreground
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
              sm:size-14
            "
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>
        </div>

        {/* ===================================================
            CURRENT VIDEO LABEL
        ==================================================== */}

        <div className="mt-5 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVideo.title}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="text-center"
            >
              <span className="text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(videos.length).padStart(2, "0")}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}