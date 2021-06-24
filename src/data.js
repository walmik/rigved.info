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
        path: 'https://www.youtube.com/embed/vozQcVjo1QI',
        type: 'youtube',
        title: 'This is the main video',
      },
      {
        path: 'https://www.youtube.com/embed/0ESmRDQzvxA',
        type: 'youtube',
        title: 'This is the main video',
      },
      {
        path: '/assets/img/fullsize/gatt1.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/gatt2.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/gatt3.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/gatt4.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/gatt5.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/gatt6.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/gatt7.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
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

![Storyboard](/assets/img/portfolio/6-gatt-wake-hair.png)
![Storyboard](/assets/img/portfolio/7-gatt-wake-1.png)

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
`,
  },
  ceres: {
    title: 'Ceres',
    poster: '/assets/img/thumbnails/ceres.png',
    shortDescription: 'Ceres',
    longDescription: 'Some more info about that comes here',
    media: [
      {
        path: '/assets/img/fullsize/ceres-turnaround.png',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/ceres-storyboard.png',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/ceres-staff.png',
        type: 'image',
        title: 'This is the main image',
      },
      {
        path: '/assets/img/fullsize/ceres-fur.png',
        type: 'image',
        title: 'This is the main image',
      },
      // {
      //   path: '/assets/img/fullsize/ceres-playblast.mov',
      //   type: 'video',
      //   title: 'This is the main image',
      // },
    ],
  },
  goat: {
    title: 'The G.O.A.T',
    poster: '/assets/img/thumbnails/goat.jpg',
    shortDescription: 'The G.O.A.T (Passenger mount)',
    longDescription: 'Some more info about that comes here',
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
  homeroom: {
    title: 'Homeroom',
    poster: '/assets/img/thumbnails/homeroom.jpg',
    shortDescription: 'Some info about Bat comes here',
    longDescription: 'Some more info about Bat comes here',
    media: [
      {
        path: 'https://www.youtube.com/embed/Gidmwiqyw_4',
        type: 'youtube',
        title: 'This is the main video',
      },
      {
        path: '/assets/img/fullsize/homeroom.jpeg',
        type: 'image',
        title: 'This is the main image',
      },
    ],
  },
  snake: {
    title: 'Snake v/s Baby',
    poster: '/assets/img/thumbnails/snake.jpg',
    shortDescription: 'Some info about Bat comes here',
    longDescription: 'Some more info about Bat comes here',
    media: [
      {
        path: 'https://www.youtube.com/embed/U85fsaCBFrs',
        type: 'youtube',
        title: 'This is the main video',
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
    shortDescription: 'Some info about Toaster comes here',
    longDescription: 'Some more info about Toaster comes here',
    media: [
      {
        path: 'https://www.youtube.com/embed/2dNyrFH70pU',
        type: 'youtube',
        title: 'This is the main video',
      },
    ],
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
