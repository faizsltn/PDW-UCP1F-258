// ===== AMBIL & SIMPAN DATA KE localStorage =====
function getMembers() {
    const data = localStorage.getItem('members');
    return data ? JSON.parse(data) : [];
  }
  
  function saveMembers(arr) {
    localStorage.setItem('members', JSON.stringify(arr));
  }
  
  // ===== RENDER TABEL (index.html) =====
  function renderTable() {
    const tbody = document.getElementById('tableMember');
    if (!tbody) return;
  
    const members = getMembers();
    tbody.innerHTML = '';
  
    if (members.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; color:#aaa; padding:24px;">
            Belum ada anggota. <a href="./form.html" style="color:#00eaff;">Daftar sekarang!</a>
          </td>
        </tr>`;
      return;
    }
  
    members.forEach(function(m, i) {
      tbody.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${m.nama}</td>
          <td>${m.email}</td>
          <td>${m.bidang}</td>
          <td>
            <button class="btn btn-danger" style="padding:5px 12px; font-size:0.8rem;"
              onclick="hapusMember(${i})">🗑 Hapus</button>
          </td>
        </tr>`;
    });
  }
