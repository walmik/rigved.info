export default {
  gatt: {
    title: 'GATT',
    poster: '/assets/img/thumbnails/gatt.jpg',
    shortDescription:
      'GATT is an original 3D animated science fiction series I am creating in partnership with a screenwriter. On Jan 1, 2021 We released S.T.A.R., a 28-minute long pilot episode, on Youtube as well as a few small film festivals. In June 2021 I released a scene from the second episode of GATT, featuring significant improvements in my animation and production workflow from the previous episode.',
    longDescription:
      'In order to create this massive animation project by myself I used the Unity engine to cut down on rendering costs, and coded tools that I could use to expedite my process. In addition to my screenwriter, I also worked with over ten voice actors, a musician, a motion capture technician, and a texture artist.',
    media: [
      {
        path: 'https://www.youtube.com/embed/psK-yVmJQms',
        type: 'youtube',
        title: 'This is the main video',
      },
      // {
      //   path: 'https://www.youtube.com/embed/0ESmRDQzvxA',
      //   type: 'youtube',
      //   title: 'This is the main video',
      // },
      // {
      //   path: '/assets/img/fullsize/gatt1.jpeg',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/gatt2.jpeg',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/gatt3.jpeg',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/gatt4.jpeg',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/gatt5.jpeg',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/gatt6.jpeg',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/gatt7.jpeg',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
    ],
    markdown: `
### Storyboard
![Stills](/assets/img/portfolio/2-gatt-storyboard.gif)

Instead of a conventional 2d storyboard, I decided to use primitive geometry and basic camera placement in Unity itself to make a 3D storyboard. A 3D storyboard enabled me to “walk” the virtual space and come up with interesting angles and compositions, as well as make adjustments based on any feedback I received from my peers. Furthermore, by creating a 3D storyboard I had already completed most of the layout work I would need to do later on when assembling the scene.

### Script
After I had finalized my storyboard, I recorded myself reading the lines from the script so I could create a correctly timed 3D animatic. This pre-recording helped us discover points in the script that did not translate as intended onto the screen and thus helped us edit and finalize the script before any actual animation work began.
- [Script 1](/assets/img/portfolio/3-gatt-script-1.png)
- [Script 2](/assets/img/portfolio/3-gatt-script-2.png)
- [Script 3](/assets/img/portfolio/3-gatt-script-3.png)

### Character
This scene required one lead character, two supporting characters, and a host of background characters. This was also the order of precedence and level of detail that I decided on for these characters. 

![Storyboard](/assets/img/portfolio/4-gatt-wake-concept.png)
![Storyboard](/assets/img/portfolio/5-gatt-wake-modelling.png)

I used Adobe Fuse to get a base human and clothing mesh for each character, and then brought them into Blender for sculpting, re-texturing and rigging. I used the concept art I had produced for Wake in an earlier episode to sculpt his body and face. 

![Character](/assets/img/portfolio/6-gatt-wake-hair.png)
![Character](/assets/img/portfolio/7-gatt-wake-1.png)

Unlike the supporting and background characters, I took the additional step of painting Wake’s textures by hand, since these were the textures that would get the most amount of screentime and could not get away with being generic. For Wake’s hair, I painted an alpha map using a Wacom tablet so that I could give the illusion of hundreds of hair strands with just a few intersecting planes.

### Motion Capture

I worked with a motion capture technician in the Carnegie Mellon mocap lab over Zoom to produce most of the character animation I needed for this scene. I provided a breakdown of the gestures, timestamps and targeted characters to make this work, and we had a back and forth of enacting various motions over video call, trying out different ways of carrying out basic actions like picking up and throwing and object, until we arrived at movements that suited each character. Once the motion capture data was prepared, retargeting the motion across all the characters was a straightforward process using the Mecanim system in Unity.

#### List of actions

| TIMESTAMP | CHARACTER | ACTION                                                           |
| --------- | --------- | ---------------------------------------------------------------- |
| 0:15      | Freddy    | Try to open the porta potty door. It is locked.                  |
| 0:30      | Wake      | Sit inside the porta potty. Leaning against a wall. Fast asleep. |
| 0:45      | Wake      | Jostled awake from being dropped.                                |
| 0:52      | Wake      | Clumsily get up, open the porta potty door and walk out.         |
| 0:54      | Wake      | Fall out of the porta potty onto the floor.                      |
| 1:00      | Wake      | Clumsily get up and look down below.                             |
| 1:04      | Wake      | Pick up a bottle and throw it at someone below you.              |
| 1:14      | Wake      | Pick up another bottle and throw it at someone below you.        |
| 1:16      | Wake      | Throw a bottle to the right at someone below you.                |
| 1:18      | Jimmy     | Quickly move aside to dodge a bottle thrown at you               |
| x:xx      | Multiple  | Cheering, clapping, pumping fist, shouting, etc.                 |

### Facial Animation
![Animation](/assets/img/portfolio/8-gatt-face-capture.gif)

Believable, high-quality facial capture does not have to require anything beyond a webcam and some tracking software. I painted over 46 blue dots on key points on my face (using blue eyeliner!) and recorded footage of myself performing every dialogue in the scene. I then brought this footage into Blender and tracked all the blue dots on my face. Finally, I wrote a script that would generate a facial rig with 46 bones corresponding to the dots on my face, and then lock the movements of those bones to the movements of the tracked dots. Once this animation was baked down into keyframes, it could be played in real-time and the process of retargeting this animation to other rigs with the same bone structure and hierarchy was straightforward. I suspect that with a higher quality video camera and a ring light, I could produce film quality facial capture using this technique. 

### VFX
My goal with the effects in this scene was to minimize attracting the viewer’s attention to them. I prefer subtle effects that contribute to the scene rather than over the top effects that distract from it. 
![Animation](/assets/img/portfolio/9-gatt-bottle-shatter.gif)
The main technical effects challenge was creating glass bottles that would fall, shatter, and could be thrown convincingly by my main character. After I had created a base bottle mesh, I used a cell fracture modifier in Blender to generate several glass shards from the bottle, and added mesh colliders to each shard. Once I brought both a fractured and an unfractured bottle asset into Unity, I wrote a script on the unfractured bottle that would replace itself with the fractured bottle upon collision, as well as add a force pointing away from the collision point on each shard. As for throwing the bottles, I wrote a script that used 3D kinematics to calculate the force and direction required for a bottle to land at a certain target, and applied an initial force accordingly. 
Other tech challenges include the construction vehicle that lifts the portapotty, for which I created a trail renderer on the hook object, so it would look like it was suspended by a cable at all times. I also wrote inverse kinematics scripts for the hands and heads of all my characters, so they could convincingly interact with environment objects such as doors and bottles, as well as subtly orient their bodies so that they were looking at each other. 

### Production
In addition to design and animation, I am also the producer of GATT. I am in charge of coordinating up to 15 solo contributors at a time during production, all of which is done virtually. I make use of documents such as production schedules, voice acting schedules, asset lists and budgets to keep this production organized, and cherish the opportunity to be a leader that GATT provides me. 

`,
  },
  ceres: {
    title: 'Ceres',
    poster: '/assets/img/thumbnails/ceres.png',
    shortDescription:
      'Ceres is a 3D animated short I created in collaboration with five classmates over the course of a semester.',
    longDescription: ' I was responsible for modelling, texturing, grooming and animating our protagonist, Ceres.',
    media: [
      {
        path: 'https://www.youtube.com/embed/GbIEhvdVtoE',
        type: 'youtube',
        title: 'This is the main video',
      },
      // {
      //   path: '/assets/img/fullsize/ceres-turnaround.png',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/ceres-storyboard.png',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/ceres-staff.png',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/ceres-fur.png',
      //   type: 'image',
      //   title: 'This is the main image',
      // },
      // {
      //   path: '/assets/img/fullsize/ceres-playblast.mov',
      //   type: 'video',
      //   title: 'This is the main image',
      // },
    ],
    markdown: `
![Modelling](/assets/img/fullsize/ceres-turnaround.png)

### Modelling
![Modelling](/assets/img/portfolio/12-ceres-wireframe-back.png)
While modelling Ceres I experimented with multiple triangle counts before settling around ~25k for the base body mesh. Our total budget for the character was around ~70k faces so this left me with plenty of room to make stylized hair, eyeballs, a staff, etc.

### Texturing
![Texturing](/assets/img/fullsize/ceres-staff.png)
The art style we were going for was stylized realism, looking to sources like Kena: Bridge of Spirits and How To Train Your Dragon for reference. I found the best way to get this kind of look was to produce hand-painted textures on my Wacom tablet. This was a welcome change of pace from the more procedural tools we were using for the environment and let me revisit lighting and shading fundamentals.

### Storyboarding
![Texturing](/assets/img/fullsize/ceres-storyboard.png)
When storyboarding this sequence, I had to keep track of several narrative ideas being contributed by my team members. I decided to go beyond the conventional linear panel-based storyboard format and instead create a two-dimensional storyboard with narrative phases. We would then go on to narrow down our choices in each phase to create a cohesive story.

### Animation
![Animation](/assets/img/portfolio/15-ceres-reference.png)
For reference I recorded myself in my garage, moving with the characteristics and mannerisms I wanted Ceres to have. I walked on my tiptoes to emulate the way deer legs work and get a natural sense of balance. 
<video playsinline autoPlay muted loop poster="/assets/img/portfolio/15-ceres-reference.png"><source src="/assets/img/portfolio/16-ceres-playblast.mov" type="video/mp4" /></video>

### Groom
![Fur](/assets/img/fullsize/ceres-fur.png)
This project was my first time working with Alembic files. I used Blender to author a strand-based fur Alembic that I was then able to bring into Unreal Engine 4.26 using the new Groom plug-ins.

`,
  },
  goat: {
    title: 'The G.O.A.T',
    poster: '/assets/img/thumbnails/goat.jpg',
    shortDescription: 'Passenger mount',
    longDescription:
      'The G.O.A.T. is a creature I designed, modelled and textured for the Blizzard 2021 Student Art Contest.',
    media: [
      {
        path: '/assets/img/fullsize/goat1.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/goat-poly.mp4',
        type: 'video',
        poster: '/assets/img/fullsize/goat1.jpeg',
        title: 'This is the main image',
      },
    ],
  },
  snake: {
    title: 'Snake v/s Baby',
    poster: '/assets/img/thumbnails/snake.jpg',
    shortDescription:
      'Snake V/s Baby is a humorous animated short I created using some novel procedural animation techniques. ',
    longDescription:
      'Using code, the built-in physics system and a little trigonometry I was able to achieve unique results over a relatively short period of time. ',
    media: [
      {
        path: 'https://www.youtube.com/embed/U85fsaCBFrs',
        type: 'youtube',
        title: 'This is the main video',
      },
    ],
    markdown: `
#### Snake Animation
![Animation](/assets/img/portfolio/20-svb-snake.gif)

#### Rigid body joint animation
![Animation](/assets/img/portfolio/21-svb-baby.gif)
`,
  },
  homeroom: {
    title: 'Homeroom',
    poster: '/assets/img/thumbnails/homeroom.jpg',
    shortDescription:
      'Homeroom is a 4-player cooperative puzzle game that I did game design, animation and client-side programming for. ',
    longDescription:
      'My design channels the frustrations and anxiety of being an immigrant in the United States into a fun, collaborative experience.',
    media: [
      {
        path: 'https://www.youtube.com/embed/Gidmwiqyw_4',
        type: 'youtube',
        title: 'This is the main video',
      },
      {
        path: '/assets/img/portfolio/22-homeroom-backpack.gif',
        type: 'image',
        title: 'homeroom',
      },
      {
        path: '/assets/img/portfolio/22-homeroom-desk.gif',
        type: 'image',
        title: 'homeroom',
      },
      {
        path: '/assets/img/portfolio/22-homeroom-door.gif',
        type: 'image',
        title: 'homeroom',
      },
    ],
  },
  // primitive: {
  //   title: 'Animated primitives',
  //   poster: '/assets/img/thumbnails/primitive.jpg',
  //   shortDescription: 'Some info about Bat comes here',
  //   longDescription: 'Some more info about Bat comes here',
  //   media: [
  //     {
  //       path: '/assets/img/fullsize/sentryassembly.mp4',
  //       type: 'video',
  //       poster: '/assets/img/fullsize/primitive.jpeg',
  //       title: 'This is the main image',
  //     },
  //     {
  //       path: '/assets/img/dancingrolls.mp4',
  //       type: 'video',
  //       poster: '/assets/img/dancingrolls.png',
  //       title: 'This is the main image',
  //     },
  //   ],
  // },
  // suffering: {
  //   title: 'An end to suffering',
  //   poster: '/assets/img/thumbnails/suffering.jpg',
  //   shortDescription: 'Some info about Bat comes here',
  //   longDescription: 'Some more info about Bat comes here',
  //   media: [
  //     {
  //       path: 'https://www.youtube.com/embed/XHXa1O5Ehkw',
  //       type: 'youtube',
  //       title: 'The evil is defeated when you are',
  //     },
  //   ],
  // },
  // hubris: {
  //   title: 'Hubris',
  //   poster: '/assets/img/thumbnails/hubris.jpg',
  //   shortDescription: 'Some info about Bat comes here',
  //   longDescription: 'Some more info about Bat comes here',
  //   media: [
  //     {
  //       path: '/assets/img/fullsize/hubris.jpg',
  //       type: 'image',
  //       title: 'This is the main image',
  //     },
  //   ],
  // },
  toaster: {
    title: 'Toaster Over Pro',
    poster: '/assets/img/thumbnails/toaster.jpg',
    shortDescription:
      'Toaster Oven Pro is a short game where you get to be in a kitchen all by yourself and put anything you find into a toaster oven.',
    longDescription:
      'Toaster Oven Pro was created with the Unity engine and is built as a prototype for a VR experience I am interested in making. The goal was to make every object in the game "toastable". A playable demo is available on itch.io',
    media: [
      {
        path: 'https://www.youtube.com/embed/2dNyrFH70pU',
        type: 'youtube',
        title: 'This is the main video',
      },
      {
        path: '/assets/img/portfolio/23-top-cookies.png',
        type: 'image',
        title: 'toaster oven pro',
      },
      {
        path: '/assets/img/portfolio/23-top-fridge.png',
        type: 'image',
        title: 'toaster oven pro',
      },
      {
        path: '/assets/img/portfolio/23-top-oven.png',
        type: 'image',
        title: 'toaster oven pro',
      },
    ],
    markdown: `This is the perfect game for people who have always wanted to use a toaster oven without adult supervision`,
  },
  // lizard: {
  //   title: 'Lizard on a train',
  //   poster: '/assets/img/thumbnails/lizard.jpg',
  //   shortDescription: 'Some info about Bat comes here',
  //   longDescription: 'Some more info about Bat comes here',
  //   media: [
  //     {
  //       path: 'https://www.youtube.com/embed/fkZgTM3FCPo',
  //       type: 'youtube',
  //       title: 'This is the main video',
  //     },
  //   ],
  // },
  // succession: {
  //   title: 'Succession',
  //   poster: '/assets/img/thumbnails/succession.jpeg',
  //   shortDescription: 'Some info about Bat comes here',
  //   longDescription: 'Some more info about Bat comes here',
  //   media: [
  //     {
  //       path: 'https://www.youtube.com/embed/ZbQ5wKfJilQ',
  //       type: 'youtube',
  //       title: 'This is the main video',
  //     },
  //   ],
  // },
  // storyboard: {
  //   title: 'Storyboarding',
  //   poster: '/assets/img/thumbnails/storyboard.jpeg',
  //   shortDescription: 'Some info about Bat comes here',
  //   longDescription: 'Some more info about Bat comes here',
  //   media: [
  //     {
  //       path: '/assets/img/fullsize/storyboard.jpeg',
  //       type: 'image',
  //       title: 'This is the main image',
  //     },
  //     {
  //       path: '/assets/img/fullsize/figuredrawing1.jpeg',
  //       type: 'image',
  //       title: 'This is the main image',
  //     },
  //     {
  //       path: '/assets/img/fullsize/figuredrawing2.jpeg',
  //       type: 'image',
  //       title: 'This is the main image',
  //     },
  //   ],
  // },
};
