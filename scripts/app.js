const VARIANTS_AMOUNT = 31;

const variantsContainer = document.querySelector('.variants__content');
const galleryContainer = document.querySelector('.gallery__content');

const variantsMatrix = [
  [
    {
      imgSrc: './assets/variants/1/bullet_cat.jpg',
      heading: 'Bullet Cat',
      id: 'bullet',
      name: 'bullet-cat',
      class: 'bulletCat',
      'data-type': 'animal',
    },
    {
      imgSrc: './assets/variants/1/bullet_cat.jpg',
      heading: 'BulletCat',
      id: 'bullet',
      name: 'bullet-cat',
      class: 'bulletCat',
      'data-type': 'animal',
    },
    {
      imgSrc: './assets/variants/1/bullet_cat.jpg',
      heading: 'BulletCat',
      id: 'bullet',
      name: 'bullet-cat',
      class: 'bulletCat',
      'data-type': 'animal',
    },
    {
      imgSrc: './assets/variants/1/bullet_cat.jpg',
      heading: 'BulletCat',
      id: 'bullet',
      name: 'bullet-cat',
      class: 'bulletCat',
      'data-type': 'animal',
    },
    {
      imgSrc: './assets/variants/1/bullet_cat.jpg',
      heading: 'BulletCat',
      id: 'bullet',
      name: 'bullet-cat',
      class: 'bulletCat',
      'data-type': 'animal',
    },
    {
      imgSrc: './assets/variants/1/bullet_cat.jpg',
      heading: 'BulletCat',
      id: 'bullet',
      name: 'bullet-cat',
      class: 'bulletCat',
      'data-type': 'animal',
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

  variantsMatrix[0].forEach((imageObject) => { // 0 поменять на index когда будут варианты
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
  image.src = imageObject.imgSrc;
  image.setAttribute('id', imageObject.id);
  image.setAttribute('name', imageObject.name);
  image.setAttribute('class', imageObject.class);
  image.setAttribute('data-type', imageObject['data-type']);
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
