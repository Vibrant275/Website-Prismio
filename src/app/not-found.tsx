'use client';

import Image from 'next/image';
import LinkCard from "@/components/LinkCard";
import {FileCode, GraduationCap, LifeBuoy, Podcast, Smile} from "lucide-react";
import {Button} from "@nextui-org/react";
import {TbArrowGuide} from "react-icons/tb";
import {IoIosArrowRoundBack} from "react-icons/io";
import {useRouter} from "next/navigation";

export default function NotFound() {

    const router = useRouter();

    function routeToHomePage() {
        router.push('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">

            <Image src={'/images/BannerDark.png'} alt={'Logo'} height={160} width={160} className="mb-4"/>

            <h1 className="text-2xl font-medium text-blue-500">404</h1>
            <p className="text-[34px] font-bold text-black mb-4 mt-8">This page does not exist</p>
            <p className="text-lg text-gray-600">
                Sorry, we couldn’t find the page you’re looking for.
            </p>

            <div className={'h-[40px]'}/>

            <LinkCard
                title={'Community'}
                description={'Join our Prismio community to share ideas, ask questions, and connect with like-minded individuals.'}
                icon={<Smile strokeWidth={1.5}/>}
                href={'/community'}
            />
            <LinkCard
                title={'Documentation'}
                description={'Explore our comprehensive documentation that cover a wide range of topics to help you get started.'}
                icon={<FileCode strokeWidth={1.5}/>}
                href={'/docs'}
            />

            <LinkCard
                title={'Support'}
                description={'Get expert help with Prismio through our support channels for guidance and troubleshooting.'}
                icon={<LifeBuoy strokeWidth={1.5}/>}
                divider={false}
                href={'/support'}
            />

            {/*<LinkCard*/}
            {/*    title={'Teach'}*/}
            {/*    description={'Teach computer science with Prismio with tailored resources, lesson plans and hands-on activities.'}*/}
            {/*    icon={<GraduationCap strokeWidth={1.5}/>}*/}
            {/*    divider={false}*/}
            {/*    href={'/teach'}*/}
            {/*/>*/}

            <div className={'h-[20px]'}/>

            <Button color="primary" variant="light" startContent={<IoIosArrowRoundBack size={'24'}/>}
                    onClick={routeToHomePage}>
                Back to home
            </Button>
        </div>
    );
}