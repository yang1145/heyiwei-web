<template>
  <footer class="glass-footer">
    <div class="container-fluid px-4 px-md-5">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h3 class="h5 fw-bold text-white">何意味.com</h3>
          <p class="text-white-50">
            记录和分享最新的网络热词和流行文化，帮助大家更好地理解和融入当代网络环境。
          </p>
        </div>
        
        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
          <h4 class="h6 fw-bold text-uppercase text-primary mb-3">快速链接</h4>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-decoration-none text-white-50">首页</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-white-50">最新热梗</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-white-50">热门排行</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-white-50">分类浏览</a></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
          <h4 class="h6 fw-bold text-uppercase text-primary mb-3">关于网站</h4>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="/about" class="text-decoration-none text-white-50">关于网站</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-white-50">贡献内容</a></li>
          </ul>
        </div>
        
        <!-- 已删除订阅部分 -->
      </div>
      <hr class="my-4">
      
      <!-- 合并版权信息和备案号 -->
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <p class="mb-0 text-white-50">
            &copy; 2025 何意味.com. 保留所有权利. 
            <span class="mx-2">|</span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-white-50">
              闽ICP备2025115232号-2
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.glass-footer {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2rem 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  position: relative;
}

a.text-muted:hover {
  color: #0d6efd !important;
}

.social-links a:hover {
  color: #0d6efd !important;
  transform: translateY(-3px);
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  position: relative;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(13, 110, 253, 0.4);
}

.btn-primary:hover::before {
  opacity: 1;
}

.glass-input-group {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 4px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  position: relative;
}

.glass-input-group .form-control {
  background: transparent;
  border: none;
  border-radius: 8px;
  color: white;
}

.glass-input-group .form-control::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.glass-input-group .form-control:focus {
  box-shadow: none;
  background: transparent;
}

.glass-input-group .btn {
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  position: relative;
}

.h6.fw-bold {
  letter-spacing: 1px;
}

footer {
  animation: fadeInUp 0.6s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .container-fluid {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .glass-input-group {
    max-width: 100%;
  }
  
  /* 在小屏幕上将版权信息和备案号垂直排列 */
  .row.align-items-center .text-white-50 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .row.align-items-center .text-white-50 span.mx-2 {
    display: none;
  }
}
</style>
