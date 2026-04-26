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
  
  // ===== HAPUS ANGGOTA =====
  function hapusMember(index) {
    const members = getMembers();
    const nama = members[index].nama;
    if (confirm('Hapus anggota "' + nama + '"?')) {
      members.splice(index, 1);
      saveMembers(members);
      renderTable();
    }
  }
  
  // ===== FORM SUBMIT (form.html) =====
  function initForm() {
    const form = document.getElementById('memberForm');
    if (!form) return;
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const nama   = document.getElementById('nama').value.trim();
      const email  = document.getElementById('email').value.trim();
      const bidang = document.getElementById('bidang').value;
  
      const members = getMembers();
      members.push({ nama, email, bidang });
      saveMembers(members);
  
      const box = document.getElementById('resultBox');
      box.style.display = 'block';
      box.innerHTML = `
        ✅ <strong>Data berhasil disimpan!</strong><br>
        👤 Nama   : <strong>${nama}</strong><br>
        📧 Email  : <strong>${email}</strong><br>
        💻 Bidang : <strong>${bidang}</strong><br>
        📦 Total anggota: <strong>${members.length}</strong><br><br>
        <a href="./index.html" style="color:#00eaff; font-weight:700;">→ Lihat di Halaman Utama</a>`;
  
      form.reset();
    });
  }
  
  // ===== GALLERY =====
  const images = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    "./images/faizsltn.jpeg",
  ];
  let currentImg = 0;
  
  function nextImage() {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById('mainImg').src = images[currentImg];
  }
  
  function prevImage() {
    currentImg = (currentImg - 1 + images.length) % images.length;
    document.getElementById('mainImg').src = images[currentImg];
  }
  
  // ===== AUDIO =====
  function playAudio() { document.getElementById('myAudio').play(); }
  
  function stopAudio() {
    const a = document.getElementById('myAudio');
    a.pause();
    a.currentTime = 0;
  }
  
  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', function() {
    renderTable();
    initForm();
  });