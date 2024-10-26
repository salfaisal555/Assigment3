function isArithmeticProgression(numbers) {
  if (numbers.length < 2) {
    return false; //  Deret aritmatika perlu minimal 2 angka
  }

  const difference = numbers[1] - numbers[0]; // Hitung selisih umum dari dua elemen pertama

  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== difference) {
      return false;
    }
  } // Cek apakah semua elemen berurutan memiliki selisih yang sama

  return true;
}

// Test cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
//Ahmad Faisal Mmusyaffa'
