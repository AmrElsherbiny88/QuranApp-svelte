
<script>
      import { page } from '$app/stores';

      var currentUrl = $derived($page.url.pathname)

</script>

<div class="w-full  gap-5 text-center">
	<div class="bg-surface-500/30 p-4 grid grid-cols-4">
        <div class:active={currentUrl == "/quranSound"} >
            <i class="fa-solid fa-headphones"></i> <br> <span>القراء</span>
        </div>
        
        <div class:active={currentUrl == "/quran"} >
            <i class="fa-solid fa-book-open"></i> <br>  <span>القران الكريم</span>
        </div>

      <div class:active={currentUrl == "/random"} > 
        <i class="fa-solid fa-shuffle"></i> <br> <span>اية عشوائية</span>
        </div>

        <div class:active={currentUrl == "/sebha"} >
            <i class="fa-solid fa-list-check"></i> <br> 		<span>سبحة</span>
        </div>
    </div>
</div>
					

<style>
     .active {
    @apply bg-slate-800 rounded-xl ;
  }
</style>