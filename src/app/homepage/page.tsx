import { PackageType } from "../shared/types"
import Package from "./Package"
import Package1 from '../assets/Package1.jpg'

const packages: Array<PackageType> = [
    {
        image: "Package1",
        name: "Lorem ipsum",
        description: "One-stop Platform community for Agents and Operator in Thailand.",
    },
    {
        image: "Package1",
        name: "Lorem ipsum",
        description: "One-stop Platform community for Agents and Operator in Thailand.",
    },
    {
        image: "Package1",
        name: "Lorem ipsum",
        description: "One-stop Platform community for Agents and Operator in Thailand.",
    },
]

export default function HomePage() {
    return (
        <>
            <div className="flex justify-center items-center text-center">
                <img src={`HomePage.jpg`} alt="homepage" className="h-[500px] md:w-full object-cover" />
                <div className="absolute">
                    <p className="md:text-[38px] text-[22px] font-[700] font-Poppins text-white drop-shadow-2xl leading-normal pb-[18px]">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="md:text-[26px] text-[15px] font-[500] font-Poppins text-white drop-shadow-2xl leading-normal">One-stop Platform community for Agents and Operator in Thailand.</p>
                </div>
            </div>

            <div className="flex justify-center items-center text-center mt-[42px]">
                <p className="md:text-[26px] text-[22px] font-[700] font-Poppins">Lorem ipsum</p>
            </div>

            <div className="md:flex items-center justify-between gap-8 mt-5">
                {packages.map((package: PackageType) => (
                    <Package
                        key={package.name}
                        image={package.image}
                        name={package.name}
                        description={package.description}
                    />
                ))}
            </div>

        </>
    )
}