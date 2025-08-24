<script lang="ts">
  let isOpen = false;
</script>

<div class="bg-white shadow-xl fixed w-full z-50">

    <nav class="flex mx-auto px-6 h-15 justify-between items-center max-w-7xl">

        <!-- Logo / Name -->
        <a href="/" class="text-xl font-bold text-black-800 dark:text-black">Marco Alessi </a>

        <!-- Desktop nav -->
        <ul class="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li><a href="/" class="hover:text-blue-500 transition">About</a></li>
          <li><a href="#timeline" class="hover:text-blue-500 transition">Timeline</a></li>
          <li><a href="projects" class="hover:text-blue-500 transition">Projects</a></li>
          <li><a href="#contact" class="hover:text-blue-500 transition">Contact</a></li>
        </ul>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded hover:bg-gray-100 transition"
          on:click={() => isOpen = !isOpen}
          aria-label={isOpen ? "Chiudi menu mobile" : "Apri menu mobile"}
        >
          <svg
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
    </nav>   
    
    <!-- Mobile nav -->
    <ul
      class={`md:hidden px-6 py-3 flex flex-col gap-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
      `}
    >
      <li><a href="#home" on:click={() => isOpen = false}>Home</a></li>
      <li><a href="#projects" on:click={() => isOpen = false}>Progetti</a></li>
      <li><a href="#about" on:click={() => isOpen = false}>Chi sono</a></li>
      <li><a href="#contact" on:click={() => isOpen = false}>Contatti</a></li>
    </ul>    
    
</div>


 