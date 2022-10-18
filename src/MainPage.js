import { Flex, Link, Text, Image, Highlight } from "@chakra-ui/react";
import { Helmet } from 'react-helmet'
import pdf from "./resume.pdf";

const TITLE = 'Benjamin Sloutsky | Main Page'

const MainPage = () => {
    return (
        <Flex backgroundColor = {'#fff'} direction={'column'} alignItems = {'center'} width = {'90vw'} marginLeft = {'5vw'}>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Flex position={'fixed'} backgroundColor = {'#fff'} direction={'row'} marginRight = {'10vw'} marginTop = {'2vw'} marginBottom = {'2vw'} alignItems = {'center'} justifyContent = {'right'} gap = {'2vw'} width = {'100%'}>
                <Link href="/" color={'black'} fontSize = {'2.3vw'} fontWeight = {900} position = {'absolute'} left = {'10vw'}>Benjamin Sloutsky</Link>
                
                <Link href="/Software" fontSize={'1.5vw'} fontWeight = {500}>Software</Link>
                <Link href="/AI" fontSize={'1.5vw'} fontWeight = {500}>AI</Link>
                <Link href="/Design" fontSize={'1.5vw'} fontWeight = {500}>Design</Link>
                <Link href="/Film" fontSize={'1.5vw'} fontWeight = {500}>Film</Link>
                <Link fontSize={'1.5vw'} fontWeight = {500} href = {"https://benjaminsloutsky.substack.com/"}>Newsletter</Link>
            </Flex>
            <Flex marginTop={'7vh'} direction={'column'} width = {'70vw'} padding = {'4vw'}>
                <Image src = {require('./assets/ben.png')} boxShadow = {'0px 0px 10px 3px #ababab'} alt = {"Benjamin Sloutsky"} width = {'15vw'} height = {'15vw'} borderRadius = {'50%'}/>
                <Flex marginLeft={'2vw'} gap = {'1vw'} marginTop={'2vw'} direction={'row'} alignItems = {'center'}>
                    <Link width={'2vw'} href = "https://www.linkedin.com/in/benjamin-sloutsky-9b9b09235/" target={"_blank"}><Image src={require('./assets/linkedin.png')} alt = {"Benjamin Sloutsky"} /></Link>
                    <Link width={'2vw'} href = "https://www.instagram.com/ben.sloutsky/" target={"_blank"}><Image src={require('./assets/instagram.png')} alt = {"Benjamin Sloutsky"} /></Link>
                    <Link width={'2vw'} href = "https://twitter.com/BenSloutsky" target={"_blank"}><Image src={require('./assets/twitter.png')} alt = {"Benjamin Sloutsky"} /></Link>
                    <Link width={'2vw'} href = "https://github.com/bslou" target={"_blank"}><Image src={require('./assets/github.png')} alt = {"Benjamin Sloutsky"} /></Link>
                </Flex>
                <Text fontSize = {'3vw'} marginTop = {'2vw'} fontWeight = {300} color = {'black'}>Hi, I'm Benjamin Sloutsky</Text>
                <Text fontSize = {'3vw'} marginTop = {'2vw'} fontWeight = {300} color = {'black'} lineHeight = {0}>I love creating things and editing videos</Text>
                <Text fontSize={'1.3vw'} fontWeight={400} marginTop = {'10vh'} width = {'50vw'}><Highlight query='mathematics' styles={{ px: '2', py: '0.5vw', rounded: '8', fontWeight: 500, bg: 'yellow.200' }}>I am a mathematics major looking to transfer at De Anza College in California</Highlight></Text>
                <Text fontSize={'1.3vw'} fontWeight={400} marginTop = {'4vh'} width = {'50vw'}><Highlight query={['creative', 'thoughts']} styles={{ px: '0.5vw', py: '0.5vw', rounded: '8', fontWeight: 500, bg: 'yellow.200' }}>I write a lot about my thoughts and how I feel and the creative side behind my perspective of life!</Highlight></Text>
                <Text fontSize={'1.3vw'} fontWeight={400} marginTop = {'4vh'} width = {'50vw'}><Highlight query={['innovate']} styles={{ px: '2', py: '0.5vw', rounded: '8', fontWeight: 500, bg: 'yellow.200' }}>I also make a lot of websites and web applications for fun in order to try to innovate and help humanity!</Highlight></Text>
                <Text fontSize={'1.3vw'} fontWeight={400} marginTop = {'4vh'} width = {'50vw'}><Highlight query={['AI projects']} styles={{ px: '2', py: '0.5vw', rounded: '8', fontWeight: 500, bg: 'yellow.200' }}>Although I do not have any major significant AI projects yet, I am actively learning and will hope to integrate it in order to solve future big world problems!</Highlight></Text>
            </Flex>
            <Flex direction={'row'} gap = {'5vw'} marginLeft = {'15vw'}>
                <Flex direction={'column'}>
                    <Text fontWeight={900} fontSize = {'1.8vw'} fontStyle = {'italic'} marginBottom = {'2vh'}>Current</Text>
                    {Formation("Founder", "TutorLion", "https://tutorlion.org", "I created tutorlion to help students learn math in an engaging way (K-12)!")}
                    {Formation("Founder and SWE", "Glazey", "https://glazey.netlify.app/", "I created this app to provide community college students with more opportunities.")}
                    {Formation("College Student", "De Anza", "https://www.deanza.edu/", "I am currently a college student at De Anza seeking to transfer!")}
                    {Formation("Flea Market Student Assistant", "De Anza", "https://www.deanza.edu/", "I work at the De Anza Flea Market as a student assistant!")}
                    {Formation("WRC Tutor", "De Anza", "https://www.deanza.edu/", "English reading and writing tutor at De Anza!")}
                </Flex>
                <Flex direction={'column'}>
                    <Text fontWeight={900} fontSize = {'1.8vw'} fontStyle = {'italic'} marginBottom = {'2vh'}>Past</Text>
                    {Formation("Youtube Creator", "Beanyben", "https://www.youtube.com/channel/UCKYdZ05Z3ctj_4v_EXmDsyw", "Grew BeanyBen Youtube from 0 to 1580 subscribers in less than a month!")}
                    {Formation("Apprenticeship", "MIT Media Lab", "https://www.media.mit.edu/", "Worked on AI projects and created a unique AI project at the end of the program!")}
                    {Formation("Mobile App Developer", "Crators", "https://apps.apple.com/us/developer/anna-slutsky/id1548339302", "Developed iOS mobile applications to help the world under the name Crators Inc.")}
                    {Formation("Digital Marketing Certificate", "Google", "https://google.com/", "Earned a digital marketing certificate froom Google!")}
                    {Formation("Deep Learning Certificate", "Future Makers", "https://mysurestart.com/", "Earned a deep learning certificate from FutureMakers!")}
                    {Formation("Intro to Deep Learning", "Kaggle", "https://www.kaggle.com/", "Earned a deep learning intro certificate from Kaggle!")}
                    {Formation("Volunteer", "Los Gatos JCC", "https://apjcc.org/", "Volunteered at the Los Gatos JCC to setup meetings and manage stations for children!")}
                    <Link href = {pdf} textDecoration={'underline'} isExternal fontSize={'1.3vw'} target={"_blank"}>Full Resume</Link>
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
    );
}

const Formation = (text, company, link, des) => {
    return (
        <Flex direction={'column'} justifyContent = {'center'} marginBottom={'5vh'} width = {'35vw'}>
            <Flex direction={'row'} alignItems = {'center'}>
                <Text fontSize={'1.3vw'} color={'#606060'}>{text}&nbsp;@&nbsp;</Text>
                <Link isExternal fontSize={'1.3vw'} textDecoration={'underline'} href={link} target={"_blank"}>{company}</Link>
            </Flex>
            <Text fontSize={'1vw'} color={'gray'} width = {'25vw'}>{des}</Text>
        </Flex>
    );
}

export default MainPage;
