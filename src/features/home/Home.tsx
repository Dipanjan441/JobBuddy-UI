import { Features } from "./Feature"
import { Hero } from "./Hero"
import { Pricing } from "./Pricing"

const Home = () => {
  return (
    <div className="grow">
      <Hero />
      <Features />
      <Pricing />
    </div>
  )
}

export default Home
