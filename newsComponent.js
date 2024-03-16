Vue.component('news-component', {
	props: ['imgSrc', 'clarification', 'title', 'date'],

	data() {
		return {};
	},
	template: `
							<div class="news__card">
								<img class="news__card-img" :src="imgSrc" alt="imgSrc" />
								<div class="news__clarification"><span>{{ clarification }}</span></div>
								<h3 class="news__card-title">{{ title }}</h3>
								<div class="news__card_date">
									<time class="datetime" :datetime="date">{{ date }}</time>
									<button class="news__card_btn card_btn">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-arrow-right"
										>
											<line x1="5" y1="12" x2="19" y2="12"></line>
											<polyline points="12 5 19 12 12 19"></polyline>
										</svg>
									</button>
								</div>
							</div>
	`,
});
