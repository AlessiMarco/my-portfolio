<script lang="ts">
  import HeroImg from '$lib/assets/hero2.png?enhanced';
</script>

<div class="pt-[100px] px-20 flex justify-center">
  <div class="circle">
    <enhanced:img src={HeroImg} alt="Me" class="w-full h-full object-contain" />
  </div>
</div>

<style>
  .circle {
    
    width: clamp(140px, 40vw, 220px); /* dimensione responsive ma con limiti */
    aspect-ratio: 1 / 1;  /* sempre quadrata */
    overflow: hidden;

    background: #f9e3d0;
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: morph 5s linear infinite;
  }

  @keyframes morph {
    0%, 100% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%; }
    34%      { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
    67%      { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
  }

  /* Se l'opzione riduci animazioni è attiva disabilito l'animazione */
  @media (prefers-reduced-motion: reduce) {
    .circle { animation: none; }
  }
</style>


