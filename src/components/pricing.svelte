<script lang="ts">
	export let data;
</script>

<div class="sm:flex sm:flex-col sm:align-center">
    <div class="relative self-center border border-white/[.7] rounded-lg p-0.5 flex">
        <button type="button"
            class="ml-0.5 relative w-1/2 border rounded-sm py-2 text-sm font-bold whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-white">Monthly
            billing
        </button>
        <button type="button"
            class="ml-0.5 relative w-1/2 border rounded-sm py-2 text-sm font-thin hover:font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-white">Yearly
            billing
        </button>
    </div>
    <div
        class="mt-6 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">

        {#each data.plans as plan}
            <div class="border border-white/[.7] rounded-lg shadow-sm divide-y divide-slate-200">
                <div class="p-6">
                    <div class="flex gap-2">
                        <h2 class="text-xl leading-6 font-bold text-white">{plan.name}</h2>
                        {#if plan.freeTrial}
                            <span class="text-lg font-thin text-white/[.7]">Includes 7-Day free trial</span>
                        {:else}
                            <span class="text-lg font-thin text-white/[.0]">.</span>
                        {/if}
                    </div>
                    <p class="mt-2 text-base text-white leading-tight">{plan.description}</p>
                    <p class="mt-8">
                        <span class="text-4xl font-bold text-white tracking-tighter">$0</span>
                        <span class="text-base font-medium text-white/[.7]">/mo</span>
                    </p>
                    {#if plan.freeTrial}
                        <a href="/sign-up"
                            class="mt-8 block w-full border border-white/[.7] rounded-sm py-2 text-sm font-semibold text-white text-center">
                            Start a Free Trial Now
                        </a>
                    {:else}
                        <a href="/sign-up"
                            class="mt-8 block w-full border border-white/[.7] rounded-sm py-2 text-sm font-semibold text-white text-center">
                            Start the {plan.name} plan.
                        </a>
                    {/if}
                </div>
                <div class="pt-6 pb-8 px-6">
                    <h3 class="text-sm font-bold text-white tracking-wide uppercase">What's included</h3>
                    <ul role="list" class="mt-4 space-y-3">
                        {#each plan.features as feature}
                            <li class="flex space-x-3">
                                {#if feature.isIncluded}
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                                {:else}
                                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5 text-red-400" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                                {/if}
                                {#if feature.isHighlighted}
                                    <span class="text-base text-white">{feature.name}</span>
                                    {:else}
                                    <span class="text-base text-white/[.7]">{feature.name}</span>
                                {/if}
                                
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}

    </div>
    <div class="text-sm text-white/[.8] pt-6 mx-auto w-full md:max-w-5xl flex flex-col gap-3">
        <p class="font-bold">
            {data['discount-disclaimer']}
        </p>
        <p>
            {data['dynamic-pricing-disclaimer']}
        </p>
    </div>
</div>