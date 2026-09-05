import {
  motion,
  AnimatePresence,
} from "motion/react";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize2,
  X,
} from "lucide-react";
import { SectionLabel } from "./Reveal";

const videos = [
  {
    src: "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617279/HTC_TEASER_LAST_VERSION_iytkce.mp4",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617279/HTC_TEASER_LAST_VERSION_iytkce.jpg",
    title: "HTC Teaser",
    category: "Brand Film",
    duration: "Teaser",
  },
  {
    src: "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617279/ISE_ANNONCE_n7orty.mp4",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617279/ISE_ANNONCE_n7orty.jpg",
    title: "ISE Annonce",
    category: "Announcement",
    duration: "Film",
  },
  {
    src: "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617280/VIDEO_ANNONCE_VERSION_FINAL_om3aqp.mp4",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617280/VIDEO_ANNONCE_VERSION_FINAL_om3aqp.jpg",
    title: "Final Announcement",
    category: "Campaign Film",
    duration: "Film",
  },
  {
    src: "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617281/MAI_VIDEO_ihnhqz.mp4",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617281/MAI_VIDEO_ihnhqz.jpg",
    title: "Mai Video",
    category: "Creative Film",
    duration: "Film",
  },
  {
    src: "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617281/SIPHAL_x3q6ym.mp4",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617281/SIPHAL_x3q6ym.jpg",
    title: "Siphal",
    category: "Visual Story",
    duration: "Film",
  },
  {
    src: "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617282/PCE_VIDEO_ffrjkb.mp4",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617282/PCE_VIDEO_ffrjkb.jpg",
    title: "PCE Video",
    category: "Campaign Film",
    duration: "Film",
  },
];

export function Showreel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof videos)[number] | null
  >(null);

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

  useEffect(() => {
    if (!selectedVideo) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedVideo]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: { x: number };
      velocity: { x: number };
    }
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
    <section className="relative overflow-hidden py-16 sm:py-28">
      {/* BACKGROUND GLOWS */}
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
          className="absolute left-[15%] top-[20%] size-96 rounded-full bg-primary/20 blur-[120px] sm:size-125 sm:blur-[140px]"
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
          className="absolute right-[10%] top-[30%] size-80 rounded-full bg-fuchsia-500/15 blur-[120px] sm:size-112.5 sm:blur-[140px]"
        />
      </div>

      {/* HEADER */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Through the Lens</SectionLabel>

            <h2 className="font-display mt-4 text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.9]">
              Through the Lens
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
            A glimpse into some of the projects, campaigns and moments I had
            the opportunity to work on at ASEPA.
          </p>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="relative mt-10 w-full px-4 sm:mt-16 sm:px-10 lg:px-16">
        <div
          className="relative h-120 w-full overflow-hidden sm:h-150 sm:overflow-visible lg:h-165"
          style={{
            perspective: "1600px",
          }}
        >
          {videos.map((video, index) => {
            const position = getRelativePosition(index);
            const isActive = position === 0;

            const x =
              position === 0
                ? "0%"
                : position === -1
                  ? "-82%"
                  : position === 1
                    ? "82%"
                    : position === -2
                      ? "-155%"
                      : position === 2
                        ? "155%"
                        : position < 0
                          ? "-220%"
                          : "220%";

            const scale =
              position === 0
                ? 1
                : Math.abs(position) === 1
                  ? 0.76
                  : Math.abs(position) === 2
                    ? 0.62
                    : 0.5;

            const opacity =
              position === 0
                ? 1
                : Math.abs(position) === 1
                  ? 0.6
                  : Math.abs(position) === 2
                    ? 0.25
                    : 0;

            const blur =
              position === 0
                ? "blur(0px)"
                : Math.abs(position) === 1
                  ? "blur(2px)"
                  : "blur(5px)";

            return (
              <motion.div
                key={video.src}
                className={`
                  absolute
                  left-1/2
                  top-1/2

                  /* PHONE: smaller cards */
                  aspect-9/16
                  w-[62vw]

                  /* PC: EXACTLY THE ORIGINAL SIZE */
                  sm:w-[min(82vw,380px)]

                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-black/40
                  shadow-xl
                  group
                  ${
                    isActive
                      ? "cursor-grab active:cursor-grabbing opacity-100 pointer-events-auto"
                      : "cursor-pointer max-sm:pointer-events-none max-sm:opacity-0"
                  }
                `}
                animate={{
                  x,
                  scale,
                  opacity: isActive ? 1 : opacity,
                  filter: blur,
                  zIndex: isActive
                    ? 30
                    : 20 - Math.abs(position),
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
                    duration: 0.3,
                  },
                  filter: {
                    duration: 0.3,
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
                whileDrag={{ scale: 1.02 }}
                onClick={() => {
                  if (!isDragging) {
                    if (!isActive) {
                      setCurrentIndex(index);
                    }

                    setSelectedVideo(video);
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay={isActive}
                  muted
                  loop
                  playsInline
                  preload={isActive ? "auto" : "none"}
                />

                {/* OVERLAYS */}
                <div
                  className={`
                    absolute
                    inset-0
                    transition-opacity
                    duration-300
                    ${isActive ? "bg-black/10" : "bg-black/50"}
                  `}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                {/* PLAY BUTTON */}
                {isActive && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-black shadow-lg transition-transform duration-300 group-hover:scale-110 sm:size-20">
                      <Play className="ml-1 size-6 fill-current sm:size-7" />
                    </span>
                  </motion.div>
                )}

                {/* CARD INFO */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="mb-1.5 block text-[0.6rem] font-medium tracking-[0.25em] text-white/70 uppercase">
                        {video.category}
                      </span>

                      <h3 className="font-display text-xl text-white sm:text-2xl lg:text-3xl">
                        {video.title}
                      </h3>

                      <span className="mt-1 block text-[0.65rem] tracking-[0.2em] text-white/50 uppercase">
                        {video.duration}
                      </span>
                    </div>

                    {isActive && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedVideo(video);
                        }}
                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 sm:hidden"
                        aria-label="Open fullscreen video"
                      >
                        <Maximize2 className="size-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CONTROLS */}
        <div className="relative z-50 mt-6 flex items-center justify-center gap-4 sm:mt-8">
          <button
            type="button"
            onClick={previousVideo}
            aria-label="Previous video"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition hover:border-primary hover:bg-primary hover:text-primary-foreground sm:size-14"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
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
                      width: active ? 28 : 6,
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

          <button
            type="button"
            onClick={nextVideo}
            aria-label="Next video"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition hover:border-primary hover:bg-primary hover:text-primary-foreground sm:size-14"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>
        </div>

        {/* LABEL */}
        <div className="mt-4 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVideo.title}
              initial={{
                opacity: 0,
                y: 6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -6,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-center"
            >
              <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(videos.length).padStart(2, "0")}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="relative aspect-9/16 h-[80vh] w-auto max-w-[90vw] overflow-hidden rounded-[1.5rem] bg-black shadow-2xl ring-1 ring-white/15"
              initial={{
                scale: 0.95,
                y: 15,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              exit={{
                scale: 0.95,
                y: 15,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              style={{
                maxHeight: "680px",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <video
                src={selectedVideo.src}
                poster={selectedVideo.poster}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              />

              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                aria-label="Close video"
              >
                <X className="size-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}