// utils/data/projects-data.js
import codebuilders from '/public/image/codebuilders.png';
import mindmeld from '/public/image/mindmeld.png';
import twowheeler from '/public/image/twowheeler.png';
import fooddapp from '/public/image/fooddapp.png';
import plant from '/public/image/plant.webp';
import socialmedia from '/public/image/socialmedia.png';
export const projectsData = [
    {
      name: 'CodeBuilders',
      description: 'CodeBuilders is a robust Online Judge (OJ) platform, offering tailored functionalities for users and admin ... ',
      tags: ['React', 'Node.js', 'Express', 'MongoDB',"Docker","AWS"],
      code: 'https://github.com/andavarapulikith/CodeBuilders',
      demo: 'https://www.likith.online',
      image: codebuilders, 
    },
    {
      name: 'MIND MELD',
      description: 'It is a multifaceted platform catering to diverse interests, structured around six distinct blogs ...',
      tags: ['React', 'Node.js', 'MongoDB',"Bootstrap","Redis","Docker","swagger"],
      code: 'https://github.com/SriGanesh737/MIND-MELD-REACT',
      demo: 'https://mind-meld-react.vercel.app/',
      image: mindmeld, 
    },
    {
        name:'Two wheeler traffic voilation detection during Night',
        description:'This project is used to detect the voilation of traffic rules by two wheeler vehicles',
        tags:['Python','OpenCV','YOLOv8','EnlightenGAN'],
        code:'https://colab.research.google.com/drive/1hV-1TumH90zTGoPrdPmsEtbrNFEMgdiW?usp=sharing',
        demo:'',
        image:twowheeler,
    },
    {
        name: 'Food Recipe DAPP',
        description: 'decentralized food recipe DApp. Users connect via Goerli network and MetaMask to buy and sell unique recipe NFTs...',
        tags: ['React', 'IPFS','Solidity','NFTs','Hardhat','Goerli'],
        code: 'https://github.com/andavarapulikith/FOOD-RECIPE-DAPP',
        demo: 'https://food-recipe-dapp-qbki.vercel.app/',
        image: fooddapp,
    },{
        name:'Plant disease prediction',
        description:' predict the disease of the plant by using the leaf image of the plant ...',
        tags:['PyTorch','Transfer Learning','CNN','Plant Village Data'],
        code:'https://colab.research.google.com/drive/16oeJ41mV6KdeQE-RBen1kucKae5vJeVJ?usp=sharing',
        demo:'https://www.canva.com/design/DAF9Cdgw1dk/MtODpS7FHTYbrrwsx_2GPw/view?utm_content=DAF9Cdgw1dk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
        image:plant,

    },{
        name:'Social Media Application',
        description:'A feature-rich social media application  offering a seamless user experience with robust functionalities ...',
        tags:['React','Node.js','MongoDB','Redux','Multer','JWT'],
        code:'https://github.com/andavarapulikith/social-media-application',
        demo:'https://github.com/andavarapulikith/social-media-application',
        image:socialmedia,

    },
    
  ];
  