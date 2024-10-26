function sumArray(arr, int) {
  let result = []; // Array untuk menyimpan pasangan yang valid

  // Loop melalui setiap elemen di array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Jika jumlah dua angka sama dengan integer yang diberikan
      if (arr[i] + arr[j] === int) {
        result.push([arr[i], arr[j]]); // Tambahkan pasangan ke hasil
      }
    }
  }

  return result;
}

// Contoh kasus uji
console.log(sumArray([2, 1, 4, 3], 5)); // Output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // Output: [[1, 10], [8, 3]]
//Ahmad Faisal Musyaffa'
