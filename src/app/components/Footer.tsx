import Link from "next/link"
import Image from "next/image"


function Footer() {
  return (
<footer className='absolute w-fit flex gap-4 bottom-20 left-7 lg:left-13'>
<Link href={"https://www.linkedin.com/in/abdulaziz-alzahrani-7b9a4220b/"}>
<Image src={"/icons/white-call.svg"} width={25} height={25} alt="call"/>
</Link>
<Link href={"https://www.instagram.com/elhamabaft"}>
<Image src={"/icons/white-instagram.svg"} width={25} height={25} alt="call"/>
</Link>
<Link href={"https://www.linkedin.com/in/abdulaziz-alzahrani-7b9a4220b/"}>
<Image src={"/icons/white-message.svg"} width={25} height={25} alt="call"/>
</Link>


</footer>
  )
}

export default Footer
