<script lang="ts">
  import Timeline from "$lib/components/Timeline.svelte"
  export let data;
</script>

<svelte:head>
	<title>Marco Alessi - Solutions Engineer</title>
</svelte:head>

<section class="section">
  
  <!--Screen Reader Only-->
  <h1 class="sr-only">Marco Alessi — Solutions Engineer</h1>

  <h2 class="section-title">About</h2>
  
  <!-- pillars-->
  <div class="">
    <div class="grid md:gap-48 md:grid-cols-3">

      <div>
        <h3 class="section-subtitle">Work</h3>
        <p class="">Transforming complex customer requirements into clear solutions, moving between code, support, and strategy to drive customer success.</p>        
      </div>

      <div>
        <h3 class="section-subtitle">Mindset</h3>
        <p class="">Training resets my mind and restores my focus. Discipline is just get up and act. Balance is knowing that progress lives in both effort and recovery.</p>
      </div>   
      
      <div>
        <h3 class="section-subtitle">North Star</h3>
        <p class="">Following happiness through human connection and discovering new places. My long-term goal is to be part of projects that make a positive impact on people’s lives.</p>        
      </div>    
 
    </div>      
  </div>
 </section>

<Timeline summaries={data.summaries}/>