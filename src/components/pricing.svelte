<script lang="ts">
    export let data;
    let period = "monthly";
</script>

<div class="sm:flex sm:flex-col sm:align-center" id='pricing'>
    <div class="flex flex-col place-items-center text-center gap-4 pb-12 mx-auto w-full md:max-w-5xl">
        <h1 class="text-4xl text-bold">Platform Pricing</h1>
        <p class="text-white/[.8]">{data.description}</p>
    </div>
    <div
        class="relative place-items-center self-center border border-white/[.7] rounded-lg p-0.5 flex"
    >
        <button
            on:click={() => (period = "monthly")}
            type="button"
            class="{period === 'yearly'
                ? 'hover:font-medium text-sm font-thin'
                : 'font-bold'} ml-0.5 relative w-1/2 border rounded-sm py-2 whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-white"
            >Monthly Billing
        </button>
        <div class="h-6 border-r border-white/[.6]"></div>
        <button
            on:click={() => (period = "yearly")}
            type="button"
            class="{period === 'monthly'
                ? 'hover:font-medium text-sm font-thin'
                : 'font-bold'} ml-0.5 relative w-1/2 border rounded-sm py-2 whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-white"
            >Yearly Billing
        </button>
    </div>
    <div
        class="mt-6 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3"
    >
        {#each data.plans as plan}
            <div
                class="border border-white/[.7] rounded-lg shadow-sm divide-y divide-slate-200"
            >
                <div class="p-6">
                    <div class="flex gap-2">
                        <h2 class="text-xl leading-6 font-bold text-white">
                            {plan.name}
                        </h2>
                        {#if plan.freeTrial}
                            <span class="text-lg font-thin text-white/[.7]"
                                >Includes 7-Day Free Trial</span
                            >
                        {:else}
                            <span class="text-lg font-thin text-white/[.0]"
                                >.</span
                            >
                        {/if}
                    </div>
                    <p class="mt-2 text-base text-white/[.8] leading-tight">
                        {plan.description}
                    </p>
                    <p class="mt-6">
                        <span
                            class="text-4xl font-bold text-white tracking-tighter"
                        >
                            £ {period === "monthly" ? plan.price : (plan.price * 12 * 0.95).toFixed(0)}
                        </span>
                        <span class="text-base font-medium text-white/[.7] ml-2">
                            / {period === "monthly" ? "mo" : "yr"}
                        </span>
                        {#if period == "yearly"}
                        <div  class="text-lg font-medium text-white/[.7] tracking-tighter">
                            <span>or pay</span>
                            <span>£{(plan.price * 24 * 0.80).toFixed(0)}</span>
                            <span>if you pay for 2 years.</span>
                        </div>
                        {/if}
                    </p>
                    {#if plan.freeTrial}
                        <a
                            href="/"
                            class="mt-8 block w-full border border-white/[.7] rounded-sm py-2 text-sm font-semibold text-white text-center"
                        >
                            Start a Free Trial Now
                        </a>
                    {:else}
                        <a
                            href="/"
                            class="mt-8 block w-full border border-white/[.7] rounded-sm py-2 text-sm font-semibold text-white text-center"
                        >
                            Start the {plan.name} plan.
                        </a>
                    {/if}
                </div>
                <div class="pt-6 pb-8 px-6">
                    <h3
                        class="text-sm font-bold text-white tracking-wide uppercase"
                    >
                        {plan.featuresHeader}
                    </h3>
                    <ul role="list" class="mt-4 space-y-3">
                        {#each plan.features as feature}

                            {#if typeof feature === "string"}
                                <li class="pt-1 min-h-[24px]">
                                    <span>{feature}</span>
                                </li>
                            {:else}

                            <li class="flex space-x-3">
                                {#if !feature.isAddOn}
                                    {#if feature.isIncluded}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="flex-shrink-0 h-5 w-5 text-green-400/[.7]"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M5 12l5 5l10 -10"></path>
                                        </svg>
                                    {:else}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="flex-shrink-0 h-5 w-5 text-red-400/[.7]"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            aria-hidden="true"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18"
                                            ></line>
                                            <line x1="6" y1="6" x2="18" y2="18"
                                            ></line>
                                        </svg>
                                    {/if}
                                {/if}
                                <span class="text-base {feature.isHighlighted ? 'text-white' : 'text-white/[.7]'}">
                                    {feature.name}
                                </span>
                            </li>

                            {/if}

                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
    <div
        class="text-sm text-white/[.8] pt-6 mx-auto w-full md:max-w-5xl flex flex-col gap-3"
    >
        <p class="font-bold">
            {data["discount-disclaimer"]}
        </p>
        <p>
            {data["dynamic-pricing-disclaimer"]}
        </p>
        <p>
            {data["upgrade-disclaimer"]}
        </p>
        <p>
            {data["trail-disclaimer"]}
        </p>
        <p>
            Read our full <a href="/" class="text-white underline">Terms of Service</a> and <a href="/" class="text-white underline">Privacy Policy</a>.
        </p>
    </div>
</div>
