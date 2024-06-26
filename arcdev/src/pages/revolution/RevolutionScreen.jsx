import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import vision from '../../assets/vision.svg';
import Lottie from 'react-lottie';
import techanimation from '../../animations/technologyAnimation/data.json';
import { rev } from './revolutionUi';
import consultation from '../../assets/consultationIcon.svg';
import mockup from '../../assets/mockupIcon.svg';
import review from '../../assets/reviewIcon.svg';
import design from '../../assets/designIcon.svg';
import build from '../../assets/buildIcon.svg';
import launch from '../../assets/launchIcon.svg';
import maintain from '../../assets/maintainIcon.svg';
import iterate from '../../assets/iterateIcon.svg';

const RevolutionScreen = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: techanimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Box sx= {rev}>
      <Grid container direction='column' sx = {rev.pageContainer}>

        <Grid item container direction='column'  sx={rev.visionContainer}>
          <Typography variant='h2' >The Revolution</Typography>
          <Grid item container direction='row' alignItems='center' justifyContent='center'>
            <Grid item md={6} sx={rev.visionImage}>
              <img src={vision} alt="" />
            </Grid>
            <Grid item container direction='column' alignItems='flex-end' md={6} sx={rev.visionText}>
              <Typography variant='h4' gutterBottom>Vision</Typography>
              <Typography variant='body1' paragraph align='right'>
                The rise of computers, and subsequently the Internet, has completely 
                altered every aspect of human life. This has increased our comfort, 
                broadened our connections, and reshaped how we view the world.
              </Typography>
              <Typography variant='body1' paragraph align='right'>
                What once was confined to huge rooms and teams of engineers now 
                resides in every single one of our hands. Harnessing this unlimited 
                potential by using it to solve problems and better lives is at the 
                heart of everything we do.
              </Typography>
              <Typography variant='body1' paragraph align='right'>
                We want to help businesses capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
                By holding ourselves to rigorous standards and pristine quality, we
                can ensure you have the absolute best tools necessary to thrive in
                this new frontier.
              </Typography>
              <Typography variant='body1' paragraph align='right'>
                We see a future where every individual has personalized software
                custom tailored to their lifestyle, culture, and interests, helping them 
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column'  sx={rev.visionContainer}>
          <Grid item container direction='row' alignItems='center' justifyContent='center'>
            <Grid item md={6} sx={rev.visionImage}>
              <Lottie options={defaultOptions} height={'80%'} width={'80%'}/>
            </Grid>
            <Grid item container direction='column' alignItems='flex-start' md={6} 
              sx={rev.visionText} order={-1}>
              <Typography variant='h4' gutterBottom>Technology</Typography>
              <Typography variant='body1' paragraph >
                In 2013, Facebook invented a new way of building websites. This new system,
                React.js, completely revolutionizes the process and practice of website
                development. 
              </Typography>
              <Typography variant='body1' paragraph >
                Instead of chaining together long individual pages, like traditional websites,
                React websites are built with little chunks of code called components. These
                components are faster, easier to maintain, and are easily reused and
                customized, each serving a singular purpose. 
              </Typography>
              <Typography variant='body1' paragraph >
                Two years later they shocked the world by releasing a similar system, React
                Native, for producing iOS and Android apps. Instead of having to master two
                completely separate development platforms, you can leverage the knowledge
                you already possessed from building websites and reapply it directly! This was a
                huge leap forward. 
              </Typography>
              <Typography variant='body1' paragraph >
                This technology is now being used by companies like AirBnB, Microsoft, Netflix,
                Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram
                large portions of it were even rebuilt using React.
              </Typography>
              <Typography variant='body1' paragraph >
                Developers have since built on top of these systems by automating project
                setup and deployment, allowing creators to focus as much as possible on their
                work itself.
              </Typography>
              <Typography variant='body1' paragraph >
                These technical advancements translate into savings by significantly reducing
                the workload and streamlining the workflow for developing new pieces of
                software, while also lowering the barrier to entry for mobile app development
              </Typography>
              <Typography variant='body1' paragraph >
                This puts personalization in your pocket — faster, better, and more affordable
                than ever before.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Typography variant='h4' align='center'>Process</Typography>
          <Grid item container direction='row' sx={rev.consult2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Consultation</Typography>
              <Typography paragraph>Our process begins the moment
                you realize you need a piece of technology for your business. Whether 
                you already have an idea for where to start and what to do, or if you 
                just know you want to step things up, our initial consultation will 
                help you examine your business holistically to find the best 
                solutions. 
              </Typography>
              <Typography >
                Detailed notes will be taken on your requirements and constraints, 
                while taking care to identify other potential areas for consideration
              </Typography>
              <Typography >
                Cutting-edge advancements in machine learning like object detection 
                and natural language processing allow computers to do things 
                previously unimaginable, and our expertise and intuition will help 
                usher you into this new future of possibilities.
              </Typography>
            </Grid>
            <Grid item sx={rev.consultImage} sm={8}>
              <img src={consultation} alt="" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Grid item container direction='row' sx={rev.mockup2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Mockup</Typography>
              <Typography paragraph>Our process begins the moment
                After we settle on the best path forward and decide on a solution to 
                pursue, details like the cost and timeline will be finalized.  
              </Typography>
              <Typography >
                Then it’s time for us to start on your minimum viable product. That’s 
                just a fancy term for a mockup, which doesn’t include colors, images, 
                or any other polished design elements, but captures the essential 
                layout structure and functionality. 
              </Typography>
              <Typography >
                This helps us understand and refine the solution itself before getting 
                distracted by specifics and looks.
              </Typography>
            </Grid>
            <Grid item sx={rev.consultImage} sm={8}>
              <img src={mockup} alt="" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Grid item container direction='row' sx={rev.review2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Review</Typography>
              <Typography paragraph>
                Before moving any farther we come back to you with our progress. This 
                gives you the freedom to discuss any changes you may want or any 
                ideas you may have come up with before any heavy lifting has been 
                done. 
              </Typography>
              <Typography >
                We give you an interactive demonstration of the mockups, thoroughly 
                explaining the thought process that went into each screen and every 
                anticipated feature. 
              </Typography>
              <Typography >
                Once you’re completely satisfied with the vision for our solution we 
                get down to the nitty gritty, finedetails of design
              </Typography>
            </Grid>
            <Grid item sx={rev.reviewImage} sm={8}>
              <img src={review} alt="" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Grid item container direction='row' sx={rev.design2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Design</Typography>
              <Typography paragraph>
                Using the mockups and notes taken during the consultation as
                guides, we will start ironing out what the final product will look
                like. This also involves using any
                brand material like fonts, colors, and logos to extend the
                experience you’re already familiar with.

              </Typography>
              <Typography >
                No aspect is superfluous, and care will be taken with every decision.
              </Typography>
              {/* <Typography >
                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, finedetails of design
              </Typography> */}
            </Grid>
            <Grid item sx={rev.consultImage} sm={8}>
              <img src={design} alt="" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Grid item container direction='row' sx={rev.review2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Review</Typography>
              <Typography paragraph>
                A second round of review is essential to our goal of creating
                exactly what you want, exactly how you want it
              </Typography>
              <Typography >
                This time we’ll be going over the finalized designs in another fully
                interactive demonstration. Again this gives you an opportunity to
                tweak things and make sure we get everything right the first time.

              </Typography>
              {/* <Typography >
                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, finedetails of design
              </Typography> */}
            </Grid>
            <Grid item sx={rev.reviewImage} sm={8}>
              <img src={review} alt="" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Grid item container direction='row' sx={rev.build2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Build</Typography>
              <Typography paragraph>
                Here’s where we get down to
                business.
                Engineering begins after your
                approval on the final designs. Westart by scaffolding out the
                project on a high level, prioritizingsome areas over others.
              </Typography>
              <Typography variant='body1'>
                Each area is then developed in
                order of importance until ready to be connected to the next piece.
              </Typography>
              <Typography >
                Typically the backend, behind the
                scenes operations are completed first. Once all the services are in
                place we can then create the front end, user side of things.
              </Typography>
              <Typography >
                Finishing the application doesn’t mean we’re done though, because we use extensive 
                testing to guarantee compatibility with all intended devices. 
              </Typography>
              <Typography >
                Only after our rigorous examinations will we accept a
                product as finished, then pushing it through the production pipeline.
                This produces an optimized, compressed, consumer version
                of the code and assets ready for deployment.
              </Typography>
            </Grid>
            <Grid item sx={rev.consultImage} sm={8}>
              <img src={build} alt="" />
            </Grid>
          </Grid>
        </Grid>
        

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Grid item container direction='row' sx={rev.launch2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Launch</Typography>
              <Typography paragraph>
                The moment we’ve all been waiting for. 
              </Typography>
              <Typography variant='body1'>
                When construction comes to a close you’re the first one to know.
                We’ll give our final demonstration to show off your shiny new
                software in the wild so you know exactly how it will look to your users. 
              </Typography>
              <Typography >
                When you say the word, we press the button and launch your
                project out to the public. We’re there to ensure everything goes
                to plan so you can start reaping the rewards of your technological investment immediately
              </Typography>
            </Grid>
            <Grid item sx={rev.launchImage} sm={8}>
              <img src={launch} alt="" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Grid item container direction='row' sx={rev.maintain2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Maintain</Typography>
              <Typography paragraph>
                Our work doesn’t end there.
              </Typography>
              <Typography variant='body1'>
                After a successful launch we keep in close contact to listen to
                feedback and hear how the project is being received.
              </Typography>
              <Typography >
                From there on out we make sure your application is kept up to date
                and taking advantage of the best features and practices available.
                When new developments arise or new techniques are discovered in
                future projects, we will implement those advancements in your
                project as part of our routine maintenance.
              </Typography>
            </Grid>
            <Grid item sx={rev.consultImage} sm={8}>
              <img src={maintain} alt="" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='column' sx={rev.consultContainer}>
          <Grid item container direction='row' sx={rev.iterate2} alignItems='center'>
            <Grid item container sm={4} >
              <Typography variant='h4' color='#000'>Iterate</Typography>
              <Typography paragraph>
                The cycle repeats whenever you
                come up with a new idea for extending your current project, or
                come up with a brand new system entirely.
              </Typography>
              <Typography variant='body1'>
                  By planning for future features
                  and changes we can build and evolve your application over time.
                  As new use cases and customer needs develop we can respond
                  with continuous integration of new content.
              </Typography>
              <Typography >
                Our iterative process will keep you current and competitive,
                allowing you to quickly implement
                changes instead of waiting months for a single update.
              </Typography>
            </Grid>
            <Grid item sx={rev.consultImage} sm={8}>
              <img src={iterate} alt="" />
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default RevolutionScreen