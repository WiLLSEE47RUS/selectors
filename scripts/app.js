const VARIANTS_AMOUNT = 31;

const variantsContainer = document.querySelector('.variants__content');
const galleryContainer = document.querySelector('.gallery__content');

const variantsMatrix = [
  [
    {
      src: './assets/variants/1/advantage_cat.jpg',
      heading: 'Воодушевленный кот',
      id: 'advantage',
      name: 'advantage-cat',
      class: 'advantageCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/1/evil_cat.jpg',
      heading: 'Хмурый котик',
      id: 'evil',
      name: 'evil-cat',
      class: 'evilCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/1/omg_cat.jpg',
      heading: 'Кот в шоке',
      id: 'omg',
      name: 'omg-cat',
      class: 'omgCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/1/sad_cat.jpg',
      heading: 'Грустный кот :(',
      id: 'sad',
      name: 'sad-cat',
      class: 'sadCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/1/smile_cat.jpg',
      heading: 'Лыбу давит',
      id: 'smile',
      name: 'smile-cat',
      class: 'smileCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/1/wow_cat.jpg',
      heading: 'Удивленный кот',
      id: 'wow',
      name: 'wow-cat',
      class: 'wowCat',
      'data-type': 'animal',
    },
  ],
  [
    {
      src: './assets/variants/2/caught_dog.jpg',
      heading: 'Спалился',
      id: 'caught',
      name: 'caught-dog',
      class: 'caughtDog',
      'data-type': 'doggy',
    },
    {
      src: './assets/variants/2/funny_dog.jpg',
      heading: 'Весельчак',
      id: 'funny',
      name: 'funny-cat',
      class: 'funnyCat',
      'data-type': 'doggy',
    },
    {
      src: './assets/variants/2/pug.jpg',
      heading: 'Мопсель',
      id: 'pug',
      name: 'pug-dog',
      class: 'pugDog',
      'data-type': 'doggy',
    },
    {
      src: './assets/variants/2/sleep_dog.jpg',
      heading: 'Соня',
      id: 'sleepy',
      name: 'sleepy-dog',
      class: 'sleepyDog',
      'data-type': 'doggy',
    },
    {
      src: './assets/variants/2/wink_dog.jpg',
      heading: 'Подмигнул ;)',
      id: 'wink',
      name: 'wink-dog',
      class: 'winkDog',
      'data-type': 'doggy',
    },
    {
      src: './assets/variants/2/smile_dog.jpg',
      heading: 'Лыбу давит',
      id: 'smile',
      name: 'smile-dog',
      class: 'smileDog',
      'data-type': 'doggy',
    },
  ],
  [
    {
      src: './assets/variants/3/black-white_rabbit.jpg',
      heading: 'Черно-белый',
      id: 'blackWhite',
      name: 'blackWhite-rabbit',
      class: 'blackWhiteRabbit',
      'data-type': 'bunny',
    },
    {
      src: './assets/variants/3/blue-eye_rabbit.jpg',
      heading: 'Голубоглазый кроль',
      id: 'blueEye',
      name: 'blueEye-rabbit',
      class: 'blueEyeRabbit',
      'data-type': 'bunny',
    },
    {
      src: './assets/variants/3/brothers_rabbits.jpg',
      heading: 'Братаны',
      id: 'brothers',
      name: 'brothers-rabbits',
      class: 'brothersRabbits',
      'data-type': 'bunny',
    },
    {
      src: './assets/variants/3/just_rabbit.jpg',
      heading: 'Просто кроль',
      id: 'justRabbit',
      name: 'just-rabbit',
      class: 'justRabbit',
      'data-type': 'bunny',
    },
    {
      src: './assets/variants/3/sunny_bunny.jpg',
      heading: 'На солнышке',
      id: 'sunny',
      name: 'sunny-rabbit',
      class: 'sunnyRabbit',
      'data-type': 'bunny',
    },
    {
      src: './assets/variants/3/wondered_rabbit.jpg',
      heading: 'Удивленный кроль',
      id: 'wondered',
      name: 'wondered-rabbit',
      class: 'wonderedRabbit  ',
      'data-type': 'bunny',
    },
  ],
  [
    {
      src: './assets/variants/4/captain.jpg',
      heading: 'Капитан Америка',
      id: 'captain',
      name: 'captain-america',
      class: 'captainAmerica',
      'data-type': 'heroes',
    },
    {
      src: './assets/variants/4/hulk.jpg',
      heading: 'Халк',
      id: 'hulk',
      name: 'incredible-hulk',
      class: 'incredibleHulk',
      'data-type': 'heroes',
    },
    {
      src: './assets/variants/4/ironMan.jpg',
      heading: 'Железный человек',
      id: 'iron',
      name: 'iron-man',
      class: 'ironMan',
      'data-type': 'heroes',
    },
    {
      src: './assets/variants/4/superman.jpg',
      heading: 'Геральт из Ривии',
      id: 'superman',
      name: 'super-man',
      class: 'superMan',
      'data-type': 'heroes',
    },
    {
      src: './assets/variants/4/thor.jpg',
      heading: 'Тор',
      id: 'thor',
      name: 'thor-odinson',
      class: 'thorOdinSon',
      'data-type': 'heroes',
    },
    {
      src: './assets/variants/4/widow.jpg',
      heading: 'Черная вдова',
      id: 'widow',
      name: 'black-widow',
      class: 'blackWidow',
      'data-type': 'heroes',
    },
  ],
  [
    {
      src: './assets/variants/5/berry_mix.jpg',
      heading: 'Ягодный микс',
      id: 'mix',
      name: 'berry-mix',
      class: 'berryMix',
      'data-type': 'pies',
    },
    {
      src: './assets/variants/5/cabbage_pie.jpg',
      heading: 'С капустой',
      id: 'cabbage',
      name: 'cabbage-pie',
      class: 'cabbagePie',
      'data-type': 'pies',
    },
    {
      src: './assets/variants/5/cherry_pie.jpg',
      heading: 'С вишней',
      id: 'cherry',
      name: 'cherry-pie',
      class: 'cherryPie',
      'data-type': 'pies',
    },
    {
      src: './assets/variants/5/curd_pie.jpg',
      heading: 'С творогом',
      id: 'curd',
      name: 'curd-pie',
      class: 'curdPie',
      'data-type': 'pies',
    },
    {
      src: './assets/variants/5/meat_pie.jpg',
      heading: 'С мясом',
      id: 'meat',
      name: 'meat-pie',
      class: 'meatPie',
      'data-type': 'pies',
    },
    {
      src: './assets/variants/5/raspberry_pie.jpg',
      heading: 'С ягодами',
      id: 'raspberry',
      name: 'raspberry-pie',
      class: 'raspberryPie',
      'data-type': 'pies',
    },
  ],
  [
    {
      src: './assets/variants/6/baskov.jpg',
      heading: 'Николай Басков',
      id: 'baskov',
      name: 'kolya',
      class: 'kolyaBaskov',
      'data-type': 'singer',
    },
    {
      src: './assets/variants/6/bilan.jpg',
      heading: 'Дима Билан',
      id: 'bilan',
      name: 'dima',
      class: 'dimaBilan',
      'data-type': 'singer',
    },
    {
      src: './assets/variants/6/kirkorov.jpg',
      heading: 'Филипп Киркоров',
      id: 'kirkorov',
      name: 'philipp',
      class: 'philippKirkorov',
      'data-type': 'singer',
    },
    {
      src: './assets/variants/6/lazarev.jpg',
      heading: 'Сережа Лазарев',
      id: 'lazarev',
      name: 'sergey',
      class: 'sergeyLazarev',
      'data-type': 'singer',
    },
    {
      src: './assets/variants/6/leps.jpg',
      heading: 'Григорий Лепс',
      id: 'leps',
      name: 'grisha',
      class: 'grishaLeps',
      'data-type': 'singer',
    },
    {
      src: './assets/variants/6/mihailov.jpg',
      heading: 'Все для тебя',
      id: 'stas',
      name: 'mihailov',
      class: 'stasMihailov',
      'data-type': 'singer',
    },
  ],
  [
    {
      src: './assets/variants/7/crubs.jpg',
      heading: 'Мистер Крабс',
      id: 'crubs',
      name: 'eugene',
      class: 'eugeneCrubs',
      'data-type': 'spongeBobSquarePants',
    },
    {
      src: './assets/variants/7/patrick.jpg',
      heading: 'Патрик Стар',
      id: 'patrick',
      name: 'patrick-star',
      class: 'patrickStar',
      'data-type': 'spongeBobSquarePants',
    },
    {
      src: './assets/variants/7/plankton.jpg',
      heading: 'Шелдон Планктон',
      id: 'sheldon',
      name: 'plankton',
      class: 'sheldonPlankton',
      'data-type': 'spongeBobSquarePants',
    },
    {
      src: './assets/variants/7/sandy.jpg',
      heading: 'Сэнди Чикс',
      id: 'cheecks',
      name: 'sandy',
      class: 'sandyCheecks',
      'data-type': 'spongeBobSquarePants',
    },
    {
      src: './assets/variants/7/sponge_bob.jpg',
      heading: 'Губка боб',
      id: 'squarepants',
      name: 'sponge-bob',
      class: 'spongeBob',
      'data-type': 'spongeBobSquarePants',
    },
    {
      src: './assets/variants/7/squidward.jpg',
      heading: 'Сквидвард Тентаклз',
      id: 'Tentacles',
      name: 'squidward',
      class: 'squidwardTentacles',
      'data-type': 'spongeBobSquarePants',
    },
  ],
  [
    {
      src: './assets/variants/8/harry.jpg',
      heading: 'Гарри Поттер',
      id: 'potter',
      name: 'harry',
      class: 'harryPotter',
      'data-type': 'Hogwarts',
    },
    {
      src: './assets/variants/8/hermiona.jpg',
      heading: 'Гермиона Грейнджер',
      id: 'Granger',
      name: 'hermione',
      class: 'hermioneGranger',
      'data-type': 'Hogwarts',
    },
    {
      src: './assets/variants/8/ron.jpg',
      heading: 'Рон Уизли',
      id: 'whisley',
      name: 'ron',
      class: 'ronWhisley',
      'data-type': 'Hogwarts',
    },
    {
      src: './assets/variants/8/draco.jpg',
      heading: 'Драко Малфой',
      id: 'malfoy',
      name: 'draco',
      class: 'dracoMalfoy',
      'data-type': 'Hogwarts',
    },
    {
      src: './assets/variants/8/lord.jpg',
      heading: 'Темный Лорд',
      id: 'riddle',
      name: 'tom',
      class: 'tomRiddle',
      'data-type': 'Hogwarts',
    },
    {
      src: './assets/variants/8/snape.jpg',
      heading: 'Северус Снейп',
      id: 'snape',
      name: 'severus',
      class: 'severusSnape',
      'data-type': 'Hogwarts',
    },
  ],
  [
    {
      src: './assets/variants/9/animator_snake.jpg',
      heading: 'Змея-аниматор',
      id: 'animator',
      name: 'animator-snake',
      class: 'animatorSnake',
      'data-type': 'snake',
    },
    {
      src: './assets/variants/9/bigEye_snake.jpg',
      heading: 'Лупоглазик',
      id: 'bigEye',
      name: 'bigEye-snake',
      class: 'bigEyeSnake',
      'data-type': 'snake',
    },
    {
      src: './assets/variants/9/happy_snake.jpg',
      heading: 'Довольная змея',
      id: 'happy',
      name: 'happy-snake',
      class: 'happySnake',
      'data-type': 'snake',
    },
    {
      src: './assets/variants/9/hunter_snake.jpg',
      heading: 'Сейчас нападет',
      id: 'hunter',
      name: 'hunter-snake',
      class: 'hunterSnake',
      'data-type': 'snake',
    },
    {
      src: './assets/variants/9/party_snake.jpg',
      heading: 'Весельчак',
      id: 'party',
      name: 'party-snake',
      class: 'partySnake',
      'data-type': 'snake',
    },
    {
      src: './assets/variants/9/violin_snake.jpg',
      heading: 'Скрипач',
      id: 'violin',
      name: 'violin-snake',
      class: 'violinSnake',
      'data-type': 'snake',
    },
  ],
  [
    {
      src: './assets/variants/10/Mikasa.jpg',
      heading: 'Микаса Аккерман',
      id: 'mikasa',
      name: 'ackerman',
      class: 'mikasaAckerMan',
      'data-type': 'attackOnTitan',
    },
    {
      src: './assets/variants/10/Eren.jpg',
      heading: 'Эрен Йегер',
      id: 'yeger',
      name: 'eren',
      class: 'erenYeger',
      'data-type': 'attackOnTitan',
    },
    {
      src: './assets/variants/10/Armin.jpg',
      heading: 'Армин Арлерт',
      id: 'arlert',
      name: 'armin',
      class: 'arminArlert',
      'data-type': 'attackOnTitan',
    },
    {
      src: './assets/variants/10/Levi.jpg',
      heading: 'Леви Аккерман',
      id: 'ackerman',
      name: 'levi',
      class: 'leviAckerman',
      'data-type': 'attackOnTitan',
    },
    {
      src: './assets/variants/10/Reiner.jpg',
      heading: 'Я бронированный',
      id: 'reiner',
      name: 'armored',
      class: 'armoredTitan',
      'data-type': 'attackOnTitan',
    },
    {
      src: './assets/variants/10/bertold.jpg',
      heading: 'А он колоссальный',
      id: 'bertold',
      name: 'colossus',
      class: 'colossusTitan',
      'data-type': 'attackOnTitan',
    },
  ],
  [
    {
      src: './assets/variants/11/dean.jpg',
      heading: 'Дин Винчестер',
      id: 'dean',
      name: 'dean-winchester',
      class: 'deanWinchester',
      'data-type': 'supernatural',
    },
    {
      src: './assets/variants/11/john.jpg',
      heading: 'Джон Винчестер',
      id: 'john',
      name: 'john-winchester',
      class: 'johnWinchester',
      'data-type': 'supernatural',
    },
    {
      src: './assets/variants/11/sam.jpg',
      heading: 'Сэм Винчестер',
      id: 'sam',
      name: 'sam-winchester',
      class: 'samWinchester',
      'data-type': 'supernatural',
    },
    {
      src: './assets/variants/11/castiel.jpg',
      heading: 'Кастиэль',
      id: 'angel',
      name: 'castiel',
      class: 'castielAngel',
      'data-type': 'supernatural',
    },
    {
      src: './assets/variants/11/crowley.jpg',
      heading: 'Кроули',
      id: 'crowley',
      name: 'fergus',
      class: 'fergusCrowley',
      'data-type': 'supernatural',
    },
    {
      src: './assets/variants/11/lucifer.jpg',
      heading: 'Люцифер',
      id: 'lucifer',
      name: 'morningstar',
      class: 'luciferMorningstar',
      'data-type': 'supernatural',
    },
  ],
  [
    {
      src: './assets/variants/12/bacon.jpg',
      heading: 'С беконом',
      id: 'bacon',
      name: 'lays-bacon',
      class: 'laysBacon',
      'data-type': 'snacks',
    },
    {
      src: './assets/variants/12/green_onion.jpg',
      heading: 'Зеленый лук',
      id: 'onion',
      name: 'lays-onion',
      class: 'laysOnion',
      'data-type': 'snacks',
    },
    {
      src: './assets/variants/12/lobster.jpg',
      heading: 'Лобстер',
      id: 'lobster',
      name: 'lays-lobster',
      class: 'laysLobster',
      'data-type': 'snacks',
    },
    {
      src: './assets/variants/12/paprica.jpg',
      heading: 'Паприка',
      id: 'paprica',
      name: 'lays-paprica',
      class: 'laysPaprica',
      'data-type': 'snacks',
    },
    {
      src: './assets/variants/12/pickles.jpg',
      heading: 'Малосольные огурчики',
      id: 'pickles',
      name: 'lays-pickles',
      class: 'laysPickles',
      'data-type': 'snacks',
    },
    {
      src: './assets/variants/12/salt.jpg',
      heading: 'С солью',
      id: 'salt',
      name: 'lays-salt',
      class: 'laysSalt',
      'data-type': 'snacks',
    },
  ],
  [
    {
      src: './assets/variants/13/cello.jpg',
      heading: 'Виолончель',
      id: 'cello',
      name: 'cello-violin',
      class: 'celloViolin',
      'data-type': 'instrument',
    },
    {
      src: './assets/variants/13/drums.jpg',
      heading: 'Барабаны',
      id: 'drums',
      name: 'kick',
      class: 'kickDrums',
      'data-type': 'instrument',
    },
    {
      src: './assets/variants/13/guitar.jpg',
      heading: 'Гитара',
      id: 'guitar',
      name: 'regular-guitar',
      class: 'regularGuitar',
      'data-type': 'instrument',
    },
    {
      src: './assets/variants/13/piano.jpg',
      heading: 'Пианино',
      id: 'piano',
      name: 'piano-regular',
      class: 'pianoRegular',
      'data-type': 'instrument',
    },
    {
      src: './assets/variants/13/violin.jpg',
      heading: 'Скрипка',
      id: 'violin',
      name: 'violin-regular',
      class: 'violinRegular',
      'data-type': 'instrument',
    },
    {
      src: './assets/variants/13/xylophone.jpg',
      heading: 'Ксилофон',
      id: 'xylophone',
      name: 'xylophone-regular',
      class: 'xylophoneRegular',
      'data-type': 'instrument',
    },
  ],
  [
    {
      src: './assets/variants/14/apples.jpg',
      heading: 'Яблоки',
      id: 'apples',
      name: 'apples-cut',
      class: 'applesCut',
      'data-type': 'fruit',
    },
    {
      src: './assets/variants/14/apricot.jpg',
      heading: 'Абрикос',
      id: 'apricot',
      name: 'apricot-cut',
      class: 'apricotCut',
      'data-type': 'fruit',
    },
    {
      src: './assets/variants/14/bananas.jpg',
      heading: 'Бананы',
      id: 'bananas',
      name: 'bananas-bundle',
      class: 'bananasBundle',
      'data-type': 'fruit',
    },
    {
      src: './assets/variants/14/oranges.jpg',
      heading: 'Апельсины',
      id: 'oranges',
      name: 'oranges-group',
      class: 'orangesGroup',
      'data-type': 'fruit',
    },
    {
      src: './assets/variants/14/pears.jpg',
      heading: 'Груши',
      id: 'pears',
      name: 'pears-group',
      class: 'pearsGroup',
      'data-type': 'fruit',
    },
    {
      src: './assets/variants/14/watermelon.jpg',
      heading: 'Арбуз',
      id: 'watermelon',
      name: 'watermelon-alone',
      class: 'watermelonAlone',
      'data-type': 'fruit',
    },
  ],
  [
    {
      src: './assets/variants/15/almond.jpg',
      heading: 'Миндаль',
      id: 'almond',
      name: 'almond-nut',
      class: 'almondNut',
      'data-type': 'nuts',
    },
    {
      src: './assets/variants/15/cashew.jpg',
      heading: 'Кешью',
      id: 'cashew',
      name: 'cashew-nut',
      class: 'cashewNut',
      'data-type': 'nuts',
    },
    {
      src: './assets/variants/15/hazelnut.jpg',
      heading: 'Фундук',
      id: 'hazelnut',
      name: 'hazelnut-nut',
      class: 'hazelnutNut',
      'data-type': 'nuts',
    },
    {
      src: './assets/variants/15/peanut.jpg',
      heading: 'Арахис',
      id: 'peanut',
      name: 'peanut-nut',
      class: 'peanutNut',
      'data-type': 'nuts',
    },
    {
      src: './assets/variants/15/phistachios.jpg',
      heading: 'Фисташки',
      id: 'phistachios',
      name: 'phistachios-nut',
      class: 'phistachiosNut',
      'data-type': 'nuts',
    },
    {
      src: './assets/variants/15/walnut.jpg',
      heading: 'Грецкий орех',
      id: 'walnut',
      name: 'walnut-nut',
      class: 'walnutNut',
      'data-type': 'nuts',
    },
  ],
  [
    {
      src: './assets/variants/16/emerald.jpg',
      heading: 'Изумруд',
      id: 'emerald',
      name: 'emerald-rock',
      class: 'emeraldRock',
      'data-type': 'finery',
    },
    {
      src: './assets/variants/16/garnet.jpg',
      heading: 'Гранат',
      id: 'garnet',
      name: 'garnet-rock',
      class: 'garnetRock',
      'data-type': 'finery',
    },
    {
      src: './assets/variants/16/jasper.jpg',
      heading: 'Яшма',
      id: 'jasper',
      name: 'jasper-rock',
      class: 'jasperRock',
      'data-type': 'finery',
    },
    {
      src: './assets/variants/16/ruby.jpg',
      heading: 'Рубин',
      id: 'Ruby',
      name: 'Ruby-rock',
      class: 'RubyRock',
      'data-type': 'finery',
    },
    {
      src: './assets/variants/16/saphire.jpg',
      heading: 'Сапфир',
      id: 'saphire',
      name: 'saphire-rock',
      class: 'saphireRock',
      'data-type': 'finery',
    },
    {
      src: './assets/variants/16/zirconia.jpg',
      heading: 'Фианит',
      id: 'zirconia',
      name: 'zirconia-rock',
      class: 'zirconiaRock',
      'data-type': 'finery',
    },
  ],
  [
    {
      src: './assets/variants/17/bang.jpg',
      heading: 'Крутая челочка',
      id: 'bang',
      name: 'cool-bang',
      class: 'coolBang',
      'data-type': 'penguins',
    },
    {
      src: './assets/variants/17/big.jpg',
      heading: 'После первого дня в качалке',
      id: 'big',
      name: 'big-penguin',
      class: 'bigPenguin',
      'data-type': 'penguins',
    },
    {
      src: './assets/variants/17/fly.jpg',
      heading: 'Летят-катаются',
      id: 'fly',
      name: 'fly-game',
      class: 'flyGame',
      'data-type': 'penguins',
    },
    {
      src: './assets/variants/17/goldy.jpg',
      heading: 'Златовласка',
      id: 'goldy',
      name: 'goldy-hair',
      class: 'goldyHair',
      'data-type': 'penguins',
    },
    {
      src: './assets/variants/17/scarf.jpg',
      heading: 'В шарфиках',
      id: 'scarf',
      name: 'scarf-wear',
      class: 'scarfWear',
      'data-type': 'penguins',
    },
    {
      src: './assets/variants/17/strong.jpg',
      heading: 'Силач',
      id: 'strong',
      name: 'strong-penguin',
      class: 'strongPenguin',
      'data-type': 'penguins',
    },
  ],
  [
    {
      src: './assets/variants/18/leo.jpg',
      heading: 'Леонардо',
      id: 'leo',
      name: 'leo-turtle',
      class: 'leoTurtle',
      'data-type': 'tmnt',
    },
    {
      src: './assets/variants/18/don.jpg',
      heading: 'Донателло',
      id: 'don',
      name: 'don-turtle',
      class: 'donTurtle',
      'data-type': 'tmnt',
    },
    {
      src: './assets/variants/18/mickey.jpg',
      heading: 'Микеланджело',
      id: 'mickey',
      name: 'mickey-turtle',
      class: 'mickeyTurtle',
      'data-type': 'tmnt',
    },
    {
      src: './assets/variants/18/raph.jpg',
      heading: 'Рафаэль',
      id: 'raph',
      name: 'raph-turtle',
      class: 'raphTurtle',
      'data-type': 'tmnt',
    },
    {
      src: './assets/variants/18/splinter.jpg',
      heading: 'Мастер Сплинтер',
      id: 'splinter',
      name: 'splinter-rat',
      class: 'splinterRat',
      'data-type': 'tmnt',
    },
    {
      src: './assets/variants/18/shredder.jpg',
      heading: 'Шреддер',
      id: 'shredder',
      name: 'oroku-saki',
      class: 'shredderOrokuSaki',
      'data-type': 'tmnt',
    },
  ],
  [
    {
      src: './assets/variants/19/esenin.jpg',
      heading: 'Сергей Есенин',
      id: 'esenin',
      name: 'sergey',
      class: 'eseninSergey',
      'data-type': 'writers',
    },
    {
      src: './assets/variants/19/gogol.jpg',
      heading: 'Николай Гоголь',
      id: 'gogol',
      name: 'gogol-nikolay',
      class: 'gogolNikolay',
      'data-type': 'writers',
    },
    {
      src: './assets/variants/19/lermontov.jpg',
      heading: 'Михаил Лермонтов',
      id: 'lermontov',
      name: 'lermontov-michael',
      class: 'lermontovMichael',
      'data-type': 'writers',
    },
    {
      src: './assets/variants/19/mayakovsky.jpg',
      heading: 'Владимир Маяковский',
      id: 'mayakovsky',
      name: 'mayakovsky-vladimir',
      class: 'mayakovskyVladimir',
      'data-type': 'writers',
    },
    {
      src: './assets/variants/19/pushkin.jpg',
      heading: 'Александр Пушкин',
      id: 'pushkin',
      name: 'pushkin-alex',
      class: 'pushkinAlex',
      'data-type': 'writers',
    },
    {
      src: './assets/variants/19/tolstoy.jpg',
      heading: 'Лев Толстой',
      id: 'tolstoy',
      name: 'tolstoy-lev',
      class: 'tolstoyLev',
      'data-type': 'writers',
    },
  ],
  [
    {
      src: './assets/variants/20/birch.jpg',
      heading: 'Березка',
      id: 'birch',
      name: 'birch-tree',
      class: 'birchTree',
      'data-type': 'trees',
    },
    {
      src: './assets/variants/20/chestnut.jpg',
      heading: 'Каштан',
      id: 'chestnut',
      name: 'chestnut-tree',
      class: 'chestnutTree',
      'data-type': 'trees',
    },
    {
      src: './assets/variants/20/linden.jpg',
      heading: 'Липа',
      id: 'linden',
      name: 'linden-tree',
      class: 'lindenTree',
      'data-type': 'trees',
    },
    {
      src: './assets/variants/20/maple.jpg',
      heading: 'Клен',
      id: 'maple',
      name: 'maple-tree',
      class: 'mapleTree',
      'data-type': 'trees',
    },
    {
      src: './assets/variants/20/oak.jpg',
      heading: 'Дуб',
      id: 'oak',
      name: 'oak-tree',
      class: 'oakTree',
      'data-type': 'trees',
    },
    {
      src: './assets/variants/20/rowan.jpg',
      heading: 'Рябина',
      id: 'rowan',
      name: 'rowan-tree',
      class: 'rowanTree',
      'data-type': 'trees',
    },
  ],
  [
    {
      src: './assets/variants/21/corrector.jpg',
      heading: 'Замазка',
      id: 'corrector',
      name: 'corrector-tool',
      class: 'correctorTool',
      'data-type': 'tools',
    },
    {
      src: './assets/variants/21/eraser.jpg',
      heading: 'Стирательная резинка',
      id: 'eraser',
      name: 'eraser-tool',
      class: 'eraserTool',
      'data-type': 'tools',
    },
    {
      src: './assets/variants/21/pencils.jpg',
      heading: 'Ручки',
      id: 'pens',
      name: 'pens-tool',
      class: 'pensTool',
      'data-type': 'tools',
    },
    {
      src: './assets/variants/21/pens.jpg',
      heading: 'Карандаши',
      id: 'pencils',
      name: 'pencils-tool',
      class: 'pencilsTool',
      'data-type': 'tools',
    },
    {
      src: './assets/variants/21/sharpener.jpg',
      heading: 'Точилка',
      id: 'sharpener',
      name: 'sharpener-tool',
      class: 'sharpenerTool',
      'data-type': 'tools',
    },
    {
      src: './assets/variants/21/straightedge.jpg',
      heading: 'Линейка',
      id: 'straightedge',
      name: 'straightedge-tool',
      class: 'straightedgeTool',
      'data-type': 'tools',
    },
  ],
  [
    {
      src: './assets/variants/22/audi.jpg',
      heading: 'Ауди A7',
      id: 'audi',
      name: 'audi-a7',
      class: 'audiASeven',
      'data-type': 'cars',
    },
    {
      src: './assets/variants/22/lancer.jpg',
      heading: 'Митсубиси Лансер Х',
      id: 'lancer',
      name: 'lancer-mitsubishi',
      class: 'mitsubishiLancer',
      'data-type': 'cars',
    },
    {
      src: './assets/variants/22/bmw.jpg',
      heading: 'BMW',
      id: 'bmw',
      name: 'bmw-idkmodel',
      class: 'bmwDontKnowModel',
      'data-type': 'cars',
    },
    {
      src: './assets/variants/22/mercedes.jpg',
      heading: 'Mercedes E-class',
      id: 'mercedes',
      name: 'mercedes-e-class',
      class: 'mercedesEClass',
      'data-type': 'cars',
    },
    {
      src: './assets/variants/22/skoda.jpg',
      heading: 'Skoda Octavia',
      id: 'skoda',
      name: 'skoda-octavia',
      class: 'skodaOctavia',
      'data-type': 'cars',
    },
    {
      src: './assets/variants/22/solaris.jpg',
      heading: 'Hyundai Solaris',
      id: 'Hyundai',
      name: 'Hyundai-solaris',
      class: 'hyundaiSolaris',
      'data-type': 'cars',
    },
  ],
  [
    {
      src: './assets/variants/23/alesha.jpg',
      heading: 'Алеша Попович',
      id: 'alesha',
      name: 'alesha-popovich',
      class: 'aleshaPopovich',
      'data-type': 'cartoons',
    },
    {
      src: './assets/variants/23/dobrinya.jpg',
      heading: 'Добрыня Никитич',
      id: 'dobrinya',
      name: 'dobrinya-nikitich',
      class: 'dobrinyaNikitich',
      'data-type': 'cartoons',
    },
    {
      src: './assets/variants/23/ilya.jpg',
      heading: 'Илья Муромец',
      id: 'ilya',
      name: 'ilya-muromec',
      class: 'ilyaMuromec',
      'data-type': 'cartoons',
    },
    {
      src: './assets/variants/23/horse.jpg',
      heading: 'Конь Юлий',
      id: 'horse',
      name: 'horse-yuly',
      class: 'horseYuly',
      'data-type': 'cartoons',
    },
    {
      src: './assets/variants/23/prince.jpg',
      heading: 'Князь Киевский',
      id: 'prince',
      name: 'prince-kiev',
      class: 'princeKiev',
      'data-type': 'cartoons',
    },
    {
      src: './assets/variants/23/shamakhan_queen.jpg',
      heading: 'Шамаханская царица',
      id: 'shamakhan',
      name: 'shamakhan-queen',
      class: 'shamakhanQueen',
      'data-type': 'cartoons',
    },
  ],
  [
    {
      src: './assets/variants/24/crab.jpg',
      heading: 'Краб',
      id: 'crab',
      name: 'crab-cooked',
      class: 'crabCooked',
      'data-type': 'food',
    },
    {
      src: './assets/variants/24/lobsters.jpg',
      heading: 'Лобстеры',
      id: 'lobsters',
      name: 'lobsters-cooked',
      class: 'lobstersCooked',
      'data-type': 'food',
    },
    {
      src: './assets/variants/24/mussels.jpg',
      heading: 'Устрицы',
      id: 'mussels',
      name: 'mussels-cooked',
      class: 'musselsCooked',
      'data-type': 'food',
    },
    {
      src: './assets/variants/24/oysters.jpg',
      heading: 'Мидии',
      id: 'oysters',
      name: 'oysters-cooked',
      class: 'oystersCooked',
      'data-type': 'food',
    },
    {
      src: './assets/variants/24/shrimps.jpg',
      heading: 'Креветки',
      id: 'shrimps',
      name: 'shrimps-cooked',
      class: 'shrimpsCooked',
      'data-type': 'food',
    },
    {
      src: './assets/variants/24/squid.jpg',
      heading: 'Кальмар',
      id: 'squid',
      name: 'squid-cooked',
      class: 'squidCooked',
      'data-type': 'food',
    },
  ],
  [
    {
      src: './assets/variants/25/scorpion.jpg',
      heading: 'Scorpion',
      id: 'scorpion',
      name: 'Hanzo',
      class: 'hanzoHasashi',
      'data-type': 'fighter',
    },
    {
      src: './assets/variants/25/sub-zero.jpg',
      heading: 'Sub Zero',
      id: 'SubZero',
      name: 'Bi',
      class: 'BiHan',
      'data-type': 'fighter',
    },
    {
      src: './assets/variants/25/noob-saibot.jpg',
      heading: 'Noob Saibot',
      id: 'Saibot',
      name: 'Noob',
      class: 'NoobSaibot',
      'data-type': 'fighter',
    },
    {
      src: './assets/variants/25/lu-kang.jpg',
      heading: 'Lu Kang',
      id: 'Kang',
      name: 'Lu',
      class: 'LuKang',
      'data-type': 'fighter',
    },
    {
      src: './assets/variants/25/johny-cage.jpg',
      heading: 'Johny Cage',
      id: 'Cage',
      name: 'Johny',
      class: 'JohnyCage',
      'data-type': 'fighter',
    },
    {
      src: './assets/variants/25/Raiden.jpg',
      heading: 'Raiden',
      id: 'Lord',
      name: 'Raiden',
      class: 'LordRaiden',
      'data-type': 'fighter',
    },
  ],
  [
    {
      src: './assets/variants/26/itmo.png',
      heading: 'ИТМО',
      id: 'ITMO',
      name: 'Itmo-university',
      class: 'ItmoUniversity',
      'data-type': 'university',
    },
    {
      src: 'https://src.guap.ru/logos/guap/guap.svg',
      heading: 'Первый Аэрокосмический',
      id: 'SUAI',
      name: 'FirstAeroSpace',
      class: 'SUAI the_best_of_the_best',
      'data-type': 'university',
    },
    {
      src: './assets/variants/26/polytech.png',
      heading: 'Политех',
      id: 'Polytech',
      name: 'SPBPU',
      class: 'PolyTech-SPBPU',
      'data-type': 'university',
    },
    {
      src: './assets/variants/26/spbgu.jpg',
      heading: 'СПБГУ',
      id: 'SPBGU',
      name: 'SPBGU-University',
      class: 'SPBGUUniversity',
      'data-type': 'university',
    },
    {
      src: './assets/variants/26/gasu.png',
      heading: 'СПБГАСУ',
      id: 'SPBGASU',
      name: 'Architectory',
      class: 'GasuArchitectory',
      'data-type': 'university',
    },
    {
      src: './assets/variants/26/guptid.jpg',
      heading: 'СПБГУПТИД',
      id: 'SPBGUPTID',
      name: 'sutd',
      class: 'designers',
      'data-type': 'university',
    }
  ],
  [
    {
      src: './assets/variants/27/bateman.jpg',
      heading: 'Патрик Бейтман',
      id: 'bateman',
      name: 'Patrick',
      class: 'PatrickBateman',
      'data-type': 'ChristianBale',
    },
    {
      src: './assets/variants/27/equilibrium.jpeg',
      heading: 'Клерик Джон Престон',
      id: 'John',
      name: 'Preston',
      class: 'equilibrium',
      'data-type': 'ChristianBale',
    },
    {
      src: './assets/variants/27/psycho.jpg',
      heading: 'Американский психопат',
      id: 'Psycho',
      name: 'American-Psycho',
      class: 'AmericanPsycho',
      'data-type': 'ChristianBale',
    },
    {
      src: './assets/variants/27/prestige.jpg',
      heading: 'Фокусник',
      id: 'Magician',
      name: 'Magician-Bale',
      class: 'Prestige',
      'data-type': 'ChristianBale',
    },
    {
      src: './assets/variants/27/batman.jpg',
      heading: 'Брюс Уэйн',
      id: 'Batman',
      name: 'Bruce-Wayne',
      class: 'BruceWayneBatman',
      'data-type': 'ChristianBale',
    },
    {
      src: './assets/variants/27/bale.jpg',
      heading: 'Просто Кристиан Бейл',
      id: 'Just-Bale',
      name: 'Christian',
      class: 'ChristianBale',
      'data-type': 'ChristianBale',
    },
  ],
  [
    {
      src: './assets/variants/28/aqua.png',
      heading: 'JetBrains Aqua',
      id: 'aqua',
      name: 'JetBrains-aqua',
      class: 'JetBrainsAqua',
      'data-type': 'jetbrains',
    },
    {
      src: './assets/variants/28/datagrip.png',
      heading: 'JetBrains DataGrip',
      id: 'DataGrip',
      name: 'JetBrains-DataGrip',
      class: 'JetBrainsDataGrip',
      'data-type': 'jetbrains',
    },
    {
      src: './assets/variants/28/fleet.png',
      heading: 'JetBrains Fleet',
      id: 'Fleet',
      name: 'JetBrains-Fleet',
      class: 'JetBrainsFleet',
      'data-type': 'jetbrains',
    },
    {
      src: './assets/variants/28/idea.png',
      heading: 'JetBrains IntelliJ Idea',
      id: 'Idea',
      name: 'JetBrains-Idea',
      class: 'JetBrainsIdea',
      'data-type': 'jetbrains',
    },
    {
      src: './assets/variants/28/pycharm.png',
      heading: 'JetBrains PyCharm',
      id: 'PyCharm',
      name: 'JetBrains-PyCharm',
      class: 'JetBrainsPyCharm',
      'data-type': 'jetbrains',
    },
    {
      src: './assets/variants/28/webstorm.jpg',
      heading: 'JetBrains WebStorm',
      id: 'WebStorm',
      name: 'JetBrains-WebStorm',
      class: 'JetBrainsWebStorm',
      'data-type': 'jetbrains',
    },
  ],
  [
    {
      src: './assets/variants/29/angry.jpg',
      heading: 'Хмурый кот',
      id: 'angry',
      name: 'angry-cat',
      class: 'angryCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/29/cool.jpg',
      heading: 'Крутой котик',
      id: 'cool',
      name: 'cool-cat',
      class: 'coolCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/29/hunter.jpg',
      heading: 'Кот охотится',
      id: 'hunter',
      name: 'hunter-cat',
      class: 'hunterCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/29/repair.jpg',
      heading: 'Механик',
      id: 'repair',
      name: 'repair-cat',
      class: 'repairCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/29/rich.jpg',
      heading: 'Богатый кот',
      id: 'rich',
      name: 'rich-cat',
      class: 'richCat',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/29/smile.jpg',
      heading: 'Лыбу давит',
      id: 'smile',
      name: 'smile-cat',
      class: 'smileCat',
      'data-type': 'animal',
    },
  ],
  [
    {
      src: './assets/variants/30/adidas.png',
      heading: 'Adidas',
      id: 'adik',
      name: 'Adidas-Brand',
      class: 'AdidasBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/30/chanel.png',
      heading: 'Chanel',
      id: 'chanel',
      name: 'chanel-Brand',
      class: 'chanelBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/30/gucci.png',
      heading: 'Гуси',
      id: 'gucci',
      name: 'gucci-Brand',
      class: 'gucciBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/30/lacoste.jpg',
      heading: 'Lacoste',
      id: 'Lacoste',
      name: 'Lacoste-Brand',
      class: 'LacosteBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/30/puma.png',
      heading: 'Рита',
      id: 'puma',
      name: 'puma-Brand',
      class: 'pumaBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/30/nike.jpg',
      heading: 'Nike',
      id: 'nike',
      name: 'nike-Brand',
      class: 'nikeBrand',
      'data-type': 'brands',
    },
  ],
  [
    {
      src: './assets/variants/31/blackberry.png',
      heading: 'BlackBerry',
      id: 'blackberry',
      name: 'blackberry-Brand',
      class: 'blackberryBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/31/dyson.jpg',
      heading: 'Dyson',
      id: 'dyson',
      name: 'dyson-Brand',
      class: 'dysonBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/31/hp.jpg',
      heading: 'HP',
      id: 'hp',
      name: 'hp-Brand',
      class: 'hpBrand',
      'data-type': 'animal',
    },
    {
      src: './assets/variants/31/lg.jpg',
      heading: 'LG',
      id: 'lg',
      name: 'lg-Brand',
      class: 'lgBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/31/nokia.jpg',
      heading: 'Nokia',
      id: 'nokia',
      name: 'nokia-Brand',
      class: 'nokiaBrand',
      'data-type': 'brands',
    },
    {
      src: './assets/variants/31/samsung.jpeg',
      heading: 'Samsung',
      id: 'samsung',
      name: 'samsung-Brand',
      class: 'samsungBrand',
      'data-type': 'brands',
    },
  ],
]

const onVariantClick = (index) => {
  galleryContainer.innerHTML = '';

  const variantButtons = Array.from(document.querySelectorAll('.variant__btn'))

  variantButtons.forEach(btn => {
    btn.classList.remove('variant__btn_active')
  });

  variantButtons[index].classList.add('variant__btn_active');

  variantsMatrix[index].forEach((imageObject) => {
    galleryContainer.append(createVariantImgChild(imageObject))
  })
}
const createVariantBtnChild = (index) => {
  const button = document.createElement('button');
  button.classList.add('variant__btn');
  button.textContent = index + 1;
  button.onclick = () => onVariantClick(index);
  return button;
}

const createVariantImgChild = (imageObject) => {
  const rootDiv = document.createElement('div');
  const image = document.createElement('img')
  const heading = document.createElement('h1')
  for (const [key, value] of Object.entries(imageObject)) {
    image.setAttribute(key, value);
  }
  heading.textContent = imageObject.heading
  rootDiv.classList.add('imageContainer');
  rootDiv.classList.add('box-shadow');
  rootDiv.append(image);
  rootDiv.append(heading);
  return rootDiv;
}

for (let i = 0; i < VARIANTS_AMOUNT; i++) {
  variantsContainer.append(createVariantBtnChild(i))
}
