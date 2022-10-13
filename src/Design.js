import { Flex, Link, Text, Image, Highlight } from "@chakra-ui/react";
import { Helmet } from 'react-helmet'

const TITLE = 'Benjamin Sloutsky | Design'

const Design = () => {
    return (
        <Flex backgroundColor = {'#fff'} direction={'column'} alignItems = {'center'} width = {'90vw'} marginLeft = {'5vw'}>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Flex position={'fixed'} backgroundColor = {'#fff'} direction={'row'} marginRight = {'10vw'} marginTop = {'2vw'} marginBottom = {'2vw'} alignItems = {'center'} justifyContent = {'right'} gap = {'2vw'} width = {'100%'}>
                <Link href="/" color={'black'} fontSize = {'2.3vw'} fontWeight = {900} position = {'absolute'} left = {'10vw'}>Benjamin Sloutsky</Link>
                
                <Link href="/Software" fontSize={'1.5vw'} fontWeight = {500}>Software</Link>
                <Link href="/AI" fontSize={'1.5vw'} fontWeight = {500}>AI</Link>
                <Link href="/Design" fontSize={'1.5vw'} fontWeight = {500} textDecoration = {'underline'}>Design</Link>
                <Link href="/Film" fontSize={'1.5vw'} fontWeight = {500}>Film</Link>
                <Link fontSize={'1.5vw'} fontWeight = {500} href = {"https://benjaminsloutsky.substack.com/"}>Newsletter</Link>
            </Flex>


            <Flex marginTop={'7vh'} direction={'column'} width = {'70vw'} padding = {'4vw'}>
                <Text marginBottom={'1vh'} fontSize = {'2vw'} fontWeight = {700}>Design</Text>
                <Text>The creative part where the uniqueness is unleashed and distinguished!</Text>
            </Flex>

            <Flex direction={'column'} marginTop = {'6.5vh'} marginBottom = {'6.5vh'}>
                <Text fontWeight={'bold'} fontStyle = {'italic'}>This page is still a work in progress, it is going to be released soon...</Text>
               
            </Flex>

            <Flex direction={'column'} alignItems = {'left'} justifyContent = {'center'} width = {'60vw'} padding = {'2vw'}>
                <Text fontSize={'2.5vw'} fontStyle = {'italic'}>Contacts Me</Text>
                <Text fontSize={'1.15vw'} color = {'gray'} marginBottom = {'1vh'}>Have a question about my work? Want to work together? Don't hesitate to reach out!</Text>
                <Text fontSize={'1.15vw'} color = {'gray'}>Email me at <Link target={"_blank"} textDecoration={'underline'} isExternal href = {"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXKlJphckHwkJfpkqjjpCLTBhlDhxwKnkSPBspPfCmLNmngfBqVbjdgcgwQFJLGppMpg"}>ben.sloutsky@gmail.com</Link> or message me on twitter <Link target={"_blank"} textDecoration={'underline'} isExternal href = {"https://twitter.com/BenSloutsky"}>@BenjaminSloutsky</Link></Text>
            </Flex>
            <Flex direction={'column'} alignItems = {'center'} marginTop = {'12vh'} width = {'100vw'} marginBottom = {'2vh'}>
                <Text marginBottom={'1vh'}>✡︎&nbsp;Genesis 1:1</Text>
                <Text color={'gray'} fontSize = {'1vw'}>© Designed and built by Benjamin Sloutsky.</Text>
            </Flex>
        </Flex>
    )
}


const CardFormat = (img, title, des, link) => {
    return (
        <Link target={"_blank"} href={link}>
            <Flex gap={'1vh'} width={'23vw'} direction={'column'} justifyContent = {'center'}>
                <Image src={img} alt = {title}/>
                <Text fontSize={'1.5vw'} fontWeight = {900}>{title}</Text>
                <Text fontSize={'1.2vw'} color = {'gray.800'}>{des}</Text>
            </Flex>
        </Link>
    );
}


export default Design;