<template>
  <div>
    <header>
      <div class="pb-2 sm:pb-4 sm:border-b sm:border-gray-infomd">
        <!-- Hidden heading -->
        <h2 class="sr-only">{{ $t("siteHeaderInfo") }}</h2>
        <!-- Language toggle on desktop -->
        <div
          class="
            sm:flex
            hidden
            w-full
            mx-auto
            container
            px-1
            items-center
            justify-end
          "
        >
          <a
            id="lang-toggle-full"
            class="px-5 py-1 font-body underline text-blue-link"
            :aria-label="
              $t('changeLanguageTo') +
              (changeLanguageTo === 'fr' ? 'français' : 'english')
            "
            tabindex="0"
            :href="'/' + changeLanguageTo"
            :lang="changeLanguageTo"
          >
            {{ $t("changeLanguage") }}
          </a>
        </div>
        <!-- end lang toggle desktop -->

        <!-- start gc logo with mobile lang toggle -->
        <!-- src={language === "en" ? "../../assets/sig-blk-en.svg" : "../../assets/sig-blk-fr.svg"} -->
        <div
          className="flex flex-col sm:flex-row container w-full mx-auto py-1 px-5 justify-between items-center"
        >
          <div className="flex flex-row items-center justify-between">
            <img
              className="h-5 xs:h-7 sm:h-8 md:h-9 mx-3 xs:mx-0"
              src="../../assets/sig-blk-en.svg"
              alt="canada logo en"
            />
            <a
              id="lang-toggle-small"
              class="
                sm:hidden
                m-3
                sm:m-0
                font-semibold font-body
                underline
                text-blue-link
              "
              :aria-label="
                $t('changeLanguageTo') +
                (changeLanguageTo === 'fr' ? 'français' : 'english')
              "
              tabindex="0"
              :href="'/' + changeLanguageTo"
              :lang="changeLanguageTo"
            >
              {{ $t("changeLanguageAbrv") }}
            </a>
          </div>
          <!-- end gc logo -->
        </div>
      </div>
      <div class="sm:flex hidden">
        <Menu
          class="
            sm:pt-3
            w-full
            mx-auto
            container
            items-center
            justify-start
            text-gray-dark
          "
          text="menu"
        ></Menu>
      </div>
      <div class="sm:py-4">
        <Banner :title="$t('bannerTitle')" :body="$t('bannerBody')"></Banner>
      </div>
    </header>
  </div>
</template>

<script>
import Menu from "../atoms/Menu.vue";
import Banner from "../atoms/Banner.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
export default {
  name: "TheHeader",
  components: {
    Menu,
    Banner,
  },
  setup() {
    const changeLanguageTo = computed(() =>
      useI18n().locale.value == "fr" ? "en" : "fr"
    );
    return { changeLanguageTo };
  },
};
</script>
