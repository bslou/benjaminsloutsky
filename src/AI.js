import { Flex, Link, Text, Image, Highlight } from "@chakra-ui/react";
import { Helmet } from 'react-helmet'

const TITLE = 'Benjamin Sloutsky | Artificial Intelligence'

const AI = () => {
    return (
        <Flex backgroundColor = {'#fff'} direction={'column'} alignItems = {'center'} width = {'90vw'} marginLeft = {'5vw'}>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Flex position={'fixed'} backgroundColor = {'#fff'} direction={'row'} marginRight = {'10vw'} marginTop = {'2vw'} marginBottom = {'2vw'} alignItems = {'center'} justifyContent = {'right'} gap = {'2vw'} width = {'100%'}>
                <Link href="/" color={'black'} fontSize = {'2.3vw'} fontWeight = {900} position = {'absolute'} left = {'10vw'}>Benjamin Sloutsky</Link>
                
                <Link href="/Software" fontSize={'1.5vw'} fontWeight = {500}>Software</Link>
                <Link href="/AI" fontSize={'1.5vw'} fontWeight = {500} textDecoration = {'underline'}>AI</Link>
                <Link href="/Design" fontSize={'1.5vw'} fontWeight = {500}>Design</Link>
                <Link href="/Film" fontSize={'1.5vw'} fontWeight = {500}>Film</Link>
                <Link fontSize={'1.5vw'} fontWeight = {500} href = {"https://benjaminsloutsky.substack.com/"}>Newsletter</Link>
            </Flex>


            <Flex marginTop={'7vh'} direction={'column'} width = {'70vw'} padding = {'4vw'}>
                <Text marginBottom={'1vh'} fontSize = {'2vw'} fontWeight = {700}>Artificial Intelligence</Text>
                <Text>The fun, exciting, and educated future of a robot computer brain!</Text>
            </Flex>

            <Flex direction={'column'} marginTop = {'6.5vh'} marginBottom = {'6.5vh'}>
                <Text fontWeight={'bold'} fontStyle = {'italic'}>Featured</Text>
                <Flex direction={'row'} gap = {'1vw'} alignItems = {'center'} justifyContent = {'flex-start'}>
                    {CardFormat(require('./assets/mit.png'), 'MIT Media Lab', 'Learned and experimented with AI projects during this course!', 'https://github.com/bslou/FutureMakers2022')}
                    {CardFormat(require('./assets/yt.png'), 'Surestart project', 'We created and presented our AI model that we created in the SureStart organization!', 'https://youtu.be/6en4fObHhbY')}
                    {CardFormat(require('./assets/cert.jpg'), 'FutureMakers Cerficiate', 'Earned Deep Learning FutureMakers certificate for completing course!', 'https://glazey.netlify.app')}
                </Flex>
                <Flex direction={'row'} gap = {'1vw'} alignItems = {'center'} marginTop = {'4vh'}>
                    {CardFormat(require('./assets/kaggle.jpeg'), 'Kaggle Certificate', 'Earned Intro to Deep Learning Kaggle certificate for completing course!', 'https://kaggle.com')}
                    {CardFormat(require('./assets/cal.png'), 'CalHacks Project', 'Developed both of the AI models for the Cal Hacks Project using neural net and Sequential model!', 'https://github.com/bslou/cal_hacks')}
                </Flex>
            </Flex>

            <Flex direction={'column'} alignItems = {'left'} justifyContent = {'center'} width = {'60vw'} padding = {'2vw'}>
                <Text fontSize={'2.5vw'} fontStyle = {'italic'}>Contact Me</Text>
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


export default AI;
