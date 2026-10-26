import HeroSection from "../../components/home/HeroSection"
import VisionMissionValues from "../../components/home/VisionMissionValues"
import AboutPreview from "../../components/home/AboutPreview"
import ProductsPreview from "../../components/home/ProductsPreview"
import WhyAlRaidah from "../../components/home/WhyAlRaidah"
import TrainingPreview from "../../components/training/TrainingPreview"
import SocialMediaPreview from "../../components/social/SocialResponsibilityPreview"
import ProductionKnowledgePreview from "../../components/production/ProductionKnowledgePreview"
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionMissionValues />
      <AboutPreview />
      <ProductsPreview />
      <WhyAlRaidah />
      <TrainingPreview />
      <SocialMediaPreview />
      <ProductionKnowledgePreview />
    </>
  )
}