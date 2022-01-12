<template>
  <div class="home">
    <img src="@/assets/images/1.png" />

    <div class="upper-section">
      <div class="my-card">
        <div class="row no-gutters">
          <div class="col-sm-12 col-lg-5">
            <img
              class="card-img image-22x"
              src="@/assets/images/22x.png"
              alt="Suresh Dasari Card"
            />
          </div>
          <div class="col-sm-12 col-lg-7">
            <div class="card-body">
              <h5 class="card-title">Shashety Cinema</h5>
              <p class="card-text gray-color">
                An entertainment platform for watching international and Arab
                films and series, with a daily update of the latest cinematic
                works
              </p>
              <button class="btn my-btn-primary mt-3 mb-2">
                Visit the Website
              </button>
              <h5 class="card-title">You can get the APP</h5>

              <img src="@/assets/images/market1.png" class="resize mr-2" />
              <img src="@/assets/images/market2.png" class="resize" />
            </div>
          </div>
        </div>
      </div>
      <div class="second-section">
        <img src="@/assets/images/Smart-panner2x.png" />
      </div>
      <div class="my-margin">
        <div class="my-card">
          <div class="row no-gutters">
            <div class="col-lg-4">
              <img
                class="card-img"
                src="@/assets/images/fff2.png"
                alt="Suresh Dasari Card"
              />
            </div>
            <div class="col-lg-7">
              <div class="card-body">
                <h5 class="card-title">Shashety Cinema</h5>
                <p class="card-text gray-color">
                  An entertainment platform for watching international and Arab
                  films and series, with a daily update of the latest cinematic
                  works
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-card mt-3">
          <div class="row no-gutters">
            <div class="col-sm-12 col-lg-4">
              <img
                class="card-img"
                src="@/assets/images/ww2.png"
                alt="Suresh Dasari Card"
              />
            </div>
            <div class="col-sm-12 col-lg-7">
              <div class="card-body">
                <h5 class="card-title">Shashety Cinema</h5>
                <p class="card-text gray-color">
                  An entertainment platform for watching international and Arab
                  films and series, with a daily update of the latest cinematic
                  works
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer mt-1 mb-4">
        <h6>copyright © 2022 <span>Shashety</span></h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.white-color {
  color: white;
}
.gray-color {
  color: #aaaaaa;
}
img {
  width: 100%;
  height: auto;
}
img.resize {
  width: 100px; /* you can use % */
  height: auto;
}
.image-22x {
  width: 120% !important ;
  height: auto;
}
.final-section img {
  width: 100%;
  height: auto;
  /* margin-left: 80px; */
}
.my-margin {
  margin: 4.5rem 4.5rem 0 4.5rem;
}
.footer {
  text-align: center;
  color: white;
}
.footer span {
  color: #ce1212;
}
/* bootstrap card */
.my-card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  /* background-color: #fff; */
  background-clip: border-box;
  /* border: 1px solid rgba(0, 0, 0, 0.125); */
  /* border-radius: 0.25rem; */
}

.card > hr {
  margin-right: 0;
  margin-left: 0;
}

.card > .list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.card > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}

.card-title {
  color: white;
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link + .card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-header + .list-group .list-group-item:first-child {
  border-top: 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img,
.card-img-top,
.card-img-bottom {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-deck .card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-deck {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .card-deck .card {
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}

.card-group > .card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  .card-group > .card {
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
  .card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
  .card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
  .card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
  .card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.card-columns .card {
  margin-bottom: 0.75rem;
}

@media (min-width: 576px) {
  .card-columns {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}

.accordion > .card {
  overflow: hidden;
}

.accordion > .card:not(:last-of-type) {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion > .card:not(:first-of-type) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.accordion > .card > .card-header {
  border-radius: 0;
  margin-bottom: -1px;
}

/* bootstrap btns */
.my-btn-primary {
  color: #fff !important;
  background-color: #ce1212 !important;
  border-color: #ce1212 !important;
}

.my-btn-primary:hover {
  color: #fff;
  background-color: #ce1212;
  border-color: #ce1212;
}

.my-btn-primary:focus,
.my-btn-primary.focus {
  color: #fff;
  background-color: #ce1212;
  border-color: #ce1212;
  box-shadow: 0 0 0 0.2rem rgba(255, 38, 0, 0.5);
}

.my-btn-primary.disabled,
.my-btn-primary:disabled {
  color: #fff;
  background-color: #ce1212;
  border-color: #ce1212;
}

.my-btn-primary:not(:disabled):not(.disabled):active,
.my-btn-primary:not(:disabled):not(.disabled).active,
.show > .my-btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #ce1212;
  border-color: #ce1212;
}

.my-btn-primary:not(:disabled):not(.disabled):active:focus,
.my-btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .my-btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 6, 6, 0.5);
}
</style>
