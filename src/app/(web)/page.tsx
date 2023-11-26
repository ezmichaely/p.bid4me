import type { Metadata } from 'next'
import { CategoryList, Countdown, FlashSale, HeroSwiper, TagLines } from '@/components'
import { Zap } from 'lucide-react'
import { colors } from '@/constants/constants'

export const metadata: Metadata = {
  title: 'Bid 4 Me',
  description: 'Generated by create next app',
}

export default function HomePage() {
  return (
    <main>
      <section>
        <div className='container'>
          <div className='w-full lg:h-[300px] hero grid grid-cols-3 gap-4'>
            <div className='h-[300px]  col-span-3 lg:col-span-2'>
              <HeroSwiper />
            </div>
            <div className='h-full col-span-3 lg:col-span-1'>
              <div className='h-full grid grid-cols-2 lg:grid-cols-none grid-rows-none lg:grid-rows-2 gap-4'>
                <div className=' bg-secondary-300 col-span-2 md:col-span-1 lg:row-span-1'>dsds</div>
                <div className=' bg-primary-300 col-span-2 md:col-span-1 lg:row-span-1'>dsdsd</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-3 bg-gray-200 dark:bg-gray-800'>
        <div className='container'>
          <TagLines />
        </div>
      </section>

      <section className='mt-3'>
        <div className='container'>
          <div className='w-full grid grid-cols-4 gap-4'>
            <div className='hidden lg:block lg:col-span-1'>
              <CategoryList />
            </div>
            <div className='col-span-4 lg:col-span-3'>
              <div className='h-full flex justify-start items-start gap-3 flex-col w-full'>
                <div className='flex gap-x-8 items-center'>
                  <div className='flex gap-3'>
                    <Zap />
                    <h3 className='font-bold'>FLASH SALES</h3>
                  </div>
                  <div className='flex'>
                    <Countdown dateStart="2023-11-26" dateEnd="2023-11-27" />
                  </div>
                </div>
                <div className='grow w-full'>
                  <FlashSale />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
