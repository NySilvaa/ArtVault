import {getMongoClient} from "@/libs/Database";

const artistasParaInserir = [
  {
    stage_name: "Akira Ink",
    bio: "Ilustrador apaixonado por estilo mangá, focado em design de personagens e cenários cyberpunk.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Akira+Ink+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_akira_ink",
      x: "https://x.com/test_akira_ink"
    },
    followers: 12450,
    profile_creation_date: new Date("2024-02-15T10:30:00Z"),
    artworks: 84
  },
  {
    stage_name: "Elena Canvas",
    bio: "Pintora digital especializada em cenários de fantasia épica e sci-fi.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Elena+Canvas+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_elena_canvas",
      x: "https://x.com/test_elena_canvas"
    },
    followers: 34200,
    profile_creation_date: new Date("2023-11-05T14:15:00Z"),
    artworks: 120
  },
  {
    stage_name: "Pixel Ghost",
    bio: "Criador de pixel art e animações retrô para jogos independentes.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Pixel+Ghost+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_pixelghost",
      x: "https://x.com/test_pixelghost"
    },
    followers: 8900,
    profile_creation_date: new Date("2025-01-20T09:00:00Z"),
    artworks: 315
  },
  {
    stage_name: "Yuki Colors",
    bio: "Especialista em aquarela digital e retratos expressivos com paletas suaves.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Yuki+Colors+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_yukicolors",
      x: "https://x.com/test_yukicolors"
    },
    followers: 45600,
    profile_creation_date: new Date("2023-08-12T16:45:00Z"),
    artworks: 62
  },
  {
    stage_name: "Storm Designer",
    bio: "Concept artist focado em criaturas e monstros para a indústria de games.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Storm+Designer+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_stormdesign",
      x: "https://x.com/test_stormdesign"
    },
    followers: 21300,
    profile_creation_date: new Date("2024-05-30T11:20:00Z"),
    artworks: 145
  },
  {
    stage_name: "Nina Sketch",
    bio: "Quadrinista independente e amante de histórias slice-of-life.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Nina+Sketch+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_ninasketch",
      x: "https://x.com/test_ninasketch"
    },
    followers: 15800,
    profile_creation_date: new Date("2024-09-10T08:10:00Z"),
    artworks: 42
  },
  {
    stage_name: "Hollow Pen",
    bio: "Arte sombria focada em terror e fantasia dark, simulando técnicas tradicionais de nanquim.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Hollow+Pen+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_hollowpen",
      x: "https://x.com/test_hollowpen"
    },
    followers: 6720,
    profile_creation_date: new Date("2025-03-01T20:00:00Z"),
    artworks: 38
  },
  {
    stage_name: "Vivi Arts",
    bio: "Ilustradora de livros infantis com cores vibrantes, texturas ricas e personagens cativantes.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Vivi+Arts+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_viviarts",
      x: "https://x.com/test_viviarts"
    },
    followers: 52100,
    profile_creation_date: new Date("2022-12-18T13:30:00Z"),
    artworks: 210
  },
  {
    stage_name: "Ronin Drafts",
    bio: "Estudos anatômicos profundos e cenas de ação retratadas com movimentos dinâmicos.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Ronin+Drafts+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_ronindrafts",
      x: "https://x.com/test_ronindrafts"
    },
    followers: 11050,
    profile_creation_date: new Date("2024-07-22T15:00:00Z"),
    artworks: 95
  },
  {
    stage_name: "Mika 3D",
    bio: "Modeladora 3D focada em personagens estilizados e impressão em resina.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Mika+3D+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_mika3d",
      x: "https://x.com/test_mika3d"
    },
    followers: 28400,
    profile_creation_date: new Date("2023-10-02T17:45:00Z"),
    artworks: 54
  },
  {
    stage_name: "Golden Brush",
    bio: "Técnicas de pintura clássica e renascentista adaptadas magistralmente para o meio digital.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Golden+Brush+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_goldenbrush",
      x: "https://x.com/test_goldenbrush"
    },
    followers: 73000,
    profile_creation_date: new Date("2021-05-14T09:20:00Z"),
    artworks: 320
  },
  {
    stage_name: "Cyber Vector",
    bio: "Design vetorial, criação de logotipos e identidades visuais com estética futurista.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Cyber+Vector+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_cybervector",
      x: "https://x.com/test_cybervector"
    },
    followers: 14200,
    profile_creation_date: new Date("2024-11-11T11:11:00Z"),
    artworks: 88
  },
  {
    stage_name: "Lumière Art",
    bio: "Exploração intensiva do comportamento da luz e sombra em cenários urbanos noturnos.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Lumiere+Art+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_lumiere",
      x: "https://x.com/test_lumiere"
    },
    followers: 31000,
    profile_creation_date: new Date("2023-04-08T18:30:00Z"),
    artworks: 112
  },
  {
    stage_name: "Zenith Creator",
    bio: "Cartógrafo digital, criando mundos abertos e mapas incrivelmente detalhados para RPG de mesa.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Zenith+Creator+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_zenithcreator",
      x: "https://x.com/test_zenithcreator"
    },
    followers: 19500,
    profile_creation_date: new Date("2024-06-19T14:00:00Z"),
    artworks: 76
  },
  {
    stage_name: "Aura Design",
    bio: "Mistura conceitual de tipografia moderna e arte abstrata geométrica.",
    cover_photo: "https://via.placeholder.com/800x400.png?text=Aura+Design+Cover",
    social_medias: {
      instagram: "https://instagram.com/test_auradesign",
      x: "https://x.com/test_auradesign"
    },
    followers: 9800,
    profile_creation_date: new Date("2025-02-28T10:00:00Z"),
    artworks: 41
  }
];

export async function seedDatabase() {
    
    try {
    const client = await getMongoClient()
    await client.connect();
    console.log("Conectado ao MongoDB!");

    const db = client.db("artVault");
    const collection = db.collection("artists");

    const result = await collection.insertMany(artistasParaInserir);
    
    console.log(`Sucesso! ${result.insertedCount} artistas foram inseridos no banco de dados.`);
  } catch (error) {
    console.error("Erro ao inserir os artistas:", error);
  } finally {

    const db = await getMongoClient();
    await db.close();
  }
}