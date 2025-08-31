import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { TrainCard } from "@/components/manualComponents/TrainCard"
import { ModeToggle } from "@/components/ui/ToggleMode"

export default () => {
  return (
    <div>
      <AnimatedThemeToggler />
      <div className= "h-full flex justify-center items-center">
          <TrainCard />
      </div>
    </div>
  )
}