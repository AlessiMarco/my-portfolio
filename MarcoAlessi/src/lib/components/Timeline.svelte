<script lang="ts">

    export let summaries: {
        title: string;
        period: string;
        subtitle: string;
        skills: string[];
        category: string;
    }[];
    
    

    const categoryConfig: Record<string, string> = {
        work: 'after:bg-blue-500/90',
        personal: 'after:bg-emerald-400/90',
        education: 'after:bg-yellow-400/90',
    };

    const color = (cat: string) => categoryConfig[cat] ?? categoryConfig.work;

</script>

<section class="px-20 mt-50">

    <h2 class="section">
      Timeline
    </h2>

    <ol class="ml-10 lg:ml-0 pt-20 mx-auto">

    {#each summaries as item, i}
      <li
        class={`relative pl-8 lg:pl-0 pb-12
               lg:grid lg:grid-cols-2 lg:gap-x-8
               before:content-[''] before:absolute before:left-0 lg:before:left-1/2 before:-top-10 before:bottom-0 before:w-[0.1px] before:bg-black before:-translate-x-1/2 last:before:hidden
               after:content-[''] after:absolute after:left-0 lg:after:left-1/2 after:top-0 after:w-6 after:h-6 after:rounded-full after:-translate-x-1/2 ${color(item.category)}`}
        >            
               

        <!-- wrapper contenuto -->
        <div class={`w-full overflow-visible ${i % 2 === 0 ? 'lg:col-start-2 lg:pl-8' : 'lg:col-start-1 lg:pr-8 lg:text-right'}`}>
          <div class="flex flex-col gap-y-1">

            <!-- titolo + periodo -->
            <div class={`flex items-baseline gap-x-5 ${i % 2 === 0 ? '' : 'lg:justify-start lg:flex-row-reverse'}`}>
              <span class="font-small font-medium text-base inline-flex items-end">{item.title}</span>
              <span class="inline-flex items-center rounded-full bg-teal-50 px-2 py-0.5 text-xs text-teal-600 inset-ring inset-ring-teal-500/20">
                {item.period}
              </span>
            </div>

            <!-- sottotitolo -->
            <div class="text-sm text-gray-900/60">{item.subtitle}</div>

            <!-- skills -->
            <div class={`pt-3 flex flex-row flex-wrap text-xs gap-2 ${i % 2 === 0 ? '' : 'lg:justify-end'}`}>
              {#each item.skills as skill}
                <span class="inline-flex items-center rounded-md bg-blue-300/10 px-2 py-0.5 text-xs font-small text-blue-400/80 inset-ring inset-ring-blue-300/30">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
        </div>
      </li>
    {/each}

  </ol>
</section>
