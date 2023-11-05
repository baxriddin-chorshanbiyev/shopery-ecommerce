import { Button } from '../../components/ui/button'

const BlogPopularTag = () => {
  return (
    <div>
      <h3 className="mb-[16px] mt-[20px]">Popular tag</h3>
      <div className="flex flex-wrap gap-[8px] ">
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-[6px] text-gray-900 "> Meat</Button>
        <Button className="rounded-[30px] px-[16px] py-[6px]   "> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-[6px] text-gray-900"> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-[6px] text-gray-900"> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-[6px] text-gray-900"> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-[6px] text-gray-900"> Meat</Button>
        <Button className=" bg-gray-50  rounded-[30px] px-[16px] py-[6px] text-gray-900"> Meat</Button>
      </div>
    </div>
  )
}

export default BlogPopularTag