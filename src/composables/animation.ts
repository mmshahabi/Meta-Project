export function useTextVarient(delay: number) {
	const motion = computed(() => ({
		initial: {
			y: 50,
			opacity: 0
		},
		enter: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 1250,
				delay
			}
		}
	}))

	return motion
}

export function useSlideIn(direction: "left" | "up" | "right" | "down", type: string, delay: number, duration: number, initial: number) {
	const motion = computed(() => ({
		initial: {
			x: direction == "left" ? -Number(initial) : direction === "right" ? Number(initial) : 0,
			y: direction == "up" ? Number(initial) : direction === "down" ? -Number(initial) : 0
		},
		enter: {
			x: 0,
			y: 0,
			transition: {
				type,
				delay,
				duration,
				ease: "easeIn"
			}
		}
	}))

	return motion
}

export function useFadeIn(direction: string, type: string, delay: number, duration: number) {
	const motion = computed(() => ({
		initial: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0
		},
		visible: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut"
			}
		},
		enter: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut"
			}
		}
	}))

	return motion
}

export function useFadeIn2(direction: string, type: string, delay: number, duration: number) {
	const motion = computed(() => ({
		initial: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0
		},
		enter: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut"
			}
		}
	}))

	return motion
}

export const motionVarients = {
	navbar: {
		initial: {
			opacity: 0,
			y: -50,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 140
			}
		},
		enter: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 80,
				delay: 1
			}
		}
	}
}

export function useTextContainer(delayCoEfficient = 1) {
	const motion = computed(() => ({
		initial: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: delayCoEfficient * 0.1 }
		}
	}))

	return motion
}

export function useTextVarient2() {
	const motion = computed(() => ({
		initial: {
			opacity: 0,
			y: 20
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 500,
				type: "tween",
				ease: "easeIn"
			}
		}
	}))

	return motion
}

export function usePlanet(direction: string) {
	const motion = computed(() => ({
		initial: {
			x: direction === "left" ? "-100%" : "100%",
			rotate: 120
		},
		leave: {
			x: direction === "left" ? "-100%" : "100%",
			rotate: 120
		},
		visible: {
			x: 0,
			rotate: 0,
			transition: {
				type: "spring",
				duration: 1800,
				delay: 500
			}
		}
	}))

	return motion
}

export function useZoomIn(delay: number, duration: number) {
	return {
		initial: {
			scale: 0,
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay,
				duration,
				ease: "easeOut"
			}
		}
	}
}

export const footerVariants = {
	initial: {
		opacity: 0,
		y: 50,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 140
		}
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			delay: 0.5
		}
	}
}
