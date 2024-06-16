<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<form method="POST" action="?/login" class="card-body">
				<label class="form-control">
					<input name="email" type="email" placeholder="Email" class="input input-success" />
				</label>
				<label class="form-control">
					<input
						name="password"
						type="password"
						placeholder="Password"
						class="input input-success"
					/>
				</label>
				<div class="form-control mt-6">
					<button class="btn btn-outline btn-success sm:btn-sm md:btn-md lg:btn-lg">Login</button>
				</div>
				<button formaction="?/signup">Sign up</button>
			</form>
		</div>
	</div>
</div>
