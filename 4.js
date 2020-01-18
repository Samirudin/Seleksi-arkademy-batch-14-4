function cetak_gambar(size) {
  const star = ' * ';
  const line = ' = ';

  if(size % 2 == 0) {
      return 'Parameter harus angka dan ganjil';
  }
  
  console.log(' '.repeat(size / 2) + '--- panjang ---' + ' '.repeat(size / 2));

  for(var i = 0;  i < size; i++) {
    
    if(Math.floor(size / 2) === i) {
      console.log(star.repeat(size));
    }else {
      
      console.log(star+line.repeat(size - 2)+star);
    }
  }
}

 cetak_gambar(5);