// ===== AMBIL & SIMPAN DATA KE localStorage =====
function getMembers() {
    const data = localStorage.getItem('members');
    return data ? JSON.parse(data) : [];
  }
  
  function saveMembers(arr) {
    localStorage.setItem('members', JSON.stringify(arr));
  }
