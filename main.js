const allLunch = [
  {
    mmsrc :'/video/download 15.jpeg' ,
  title : 'nay linn and dd',
  button : 'broken heart',
  },
   {
    mmsrc :'/video/download (13).jpeg' ,
  title : 'SPY FAMILY',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images67.jpeg' ,
  title : 'ONE PIECE',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images (65).jpeg' ,
  title : 'SWORD NIGHT',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images (38).jpeg' ,
  title : 'DARK FOOD',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images (39).jpeg' ,
  title : 'PUBG PLAY KYAW KYAW',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images (41).jpeg' ,
  title : 'CRY MOVIE',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images (43).jpeg' ,
  title : 'COW AND MAMA',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images (45).jpeg' ,
  title : 'BLUETOOTH',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images (46).jpeg' ,
  title : 'YOON',
  button : 'broken heart',
  },
  {
    mmsrc :'/video/images (47).jpeg' ,
  title : 'GUN HERO',
  button : 'broken heart',
  },
  
  ]
  
  let mmallLunch = [ ...new Set(allLunch.map((item) => {return item})
   ) ]
   
   document.getElementById('myanmar').innerHTML = mmallLunch.map((item) =>{
     const {mmsrc , title , button } = item;
  return(
    ` 
  <div class="card_wrap">
  <img src="${mmsrc}" >
  <h1>${title}</h1>
  <button>${button}</button>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
</div> 

    `
    )
   }).join('');
   
   
    const jav = [
      {
    javsrc :'/video/images (41).jpeg' ,
  javtitle : 'nay linn and dd home',
  javbuttom : 'broken heart',
  },
   {
    javsrc :'/video/images (65).jpeg' ,
  javtitle : 'SPY FAMILY 2',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/images67.jpeg' ,
  javtitle : 'ONE PIECE luffy',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/images (52).jpeg' ,
  javtitle : 'SWORD dark NIGHT',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/images (38).jpeg' ,
  javtitle : 'DARK ko FOOD',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/images (46).jpeg' ,
  javtitle : 'PUBG PLAY KYAW KYAW',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/images (41).jpeg' ,
  javtitle : 'CRY like MOVIE',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/images (45).jpeg' ,
  javtitle : 'COW dog AND MAMA',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/images69.jpeg' ,
  javtitle : 'BLUETOOTH pro',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/images (46).jpeg' ,
  javtitle : 'YOON//Wana',
  javbuttom : 'broken heart',
  },
  {
    javsrc :'/video/buttonimg.jpeg' ,
  javtitle : 'GUN HERO',
  javbuttom : 'broken heart',
  },
 
     ]
   let forjavv = [ ...new Set(jav.map((item) => {return item})
   ) ]
   
   document.getElementById('javBOX').innerHTML = forjavv.map((item) =>{
     const {javsrc , javtitle , javbuttom } = item;
  return(
    ` 
  <div class="card_wrap">
  <img src="${javsrc}" >
  <h1>${javtitle}</h1>
  <button>${javbuttom}</button>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
</div> 

  
    `
    )
   }).join('');