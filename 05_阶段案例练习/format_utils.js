function formatPrice(price) {
  if(typeof price !== 'number'){
    price = Number(price) || 0    //当前面的为false的时候，即使后面也为false还是会返回后面的，通常用来做默认值
  }
  return "￥" + price.toFixed(2)
}