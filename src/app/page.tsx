// Remove this line as Image is not used directly in this file
// import Image from 'next/image'
import Hero from '../components/Hero'
import VisionMisionComponent from '../components/VisionMisionComponent'
import DoctrineComponent from '../components/DoctrineComponent'
import PastorComponent from '../components/PastorComponent'
import LocationComponent from '../components/LocationComponent'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero/>
      <VisionMisionComponent />
      <DoctrineComponent />
      <PastorComponent />
      <LocationComponent />
    </main>
  )
}
