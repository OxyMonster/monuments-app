<template>
    <div class="about-us row">
        <div class="about-us__container w-100">
            <div role="tablist col-12" class="w-100">
                <b-card
                    no-body
                    class="mb-1 p-3 p-3"
                    style="background-color: rgba(0, 0, 0, 0.03);"
                >
                    <b-card-header
                        header-tag="header"
                        class="p-1 d-flex justify-content-between"
                        role="tab"
                        style="background: transparent;"
                    >
                        <div class="">
                            <h4>ჩვენს შესახებ</h4>
                        </div>
                        <b-button
                            v-b-toggle.accordion-1
                            block
                            variant="info"
                            class="w-auto"
                            >Accordion 1</b-button
                        >
                    </b-card-header>
                    <b-collapse
                        id="accordion-1"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                    >
                        <b-card-body style="text-alling: left;">
                            <b-card-text>{{ aboutUsText }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card
                    no-body
                    class="mb-1 p-3 mt-4"
                    style="background-color: rgba(0, 0, 0, 0.03);"
                >
                    <b-card-header
                        header-tag="header"
                        class="p-1 d-flex justify-content-between"
                        role="tab"
                        style="background: transparent;"
                    >
                        <div class="">
                            <h4>სტრუქტურა</h4>
                        </div>
                        <b-button
                            v-b-toggle.accordion-2
                            block
                            variant="info"
                            class="w-auto"
                            >Accordion 1</b-button
                        >
                    </b-card-header>
                    <b-collapse
                        id="accordion-2"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                    >
                        <b-card-body>
                            <b-card-text
                                >I start opened because <code>visible</code> is
                                <code>true</code></b-card-text
                            >
                            <b-card-text>{{ aboutUsText }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card
                    no-body
                    class="mb-1 p-3 mt-4"
                    style="background-color: rgba(0, 0, 0, 0.03);"
                >
                    <b-card-header
                        header-tag="header"
                        class="p-1 d-flex justify-content-between"
                        role="tab"
                        style="background: transparent;"
                    >
                        <div class="">
                            <h4>დებულება</h4>
                        </div>
                        <b-button
                            v-b-toggle.accordion-3
                            block
                            variant="info"
                            class="w-auto"
                            >Accordion 1</b-button
                        >
                    </b-card-header>
                    <b-collapse
                        id="accordion-3"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                    >
                        <b-card-body>
                            <b-card-text
                                >I start opened because <code>visible</code> is
                                <code>true</code></b-card-text
                            >
                            <b-card-text>{{ aboutUsText }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card
                    no-body
                    class="mb-1 p-3 mt-4"
                    style="background-color: rgba(0, 0, 0, 0.03);"
                >
                    <b-card-header
                        header-tag="header"
                        class="p-1 d-flex justify-content-between"
                        role="tab"
                        style="background: transparent;"
                    >
                        <div class="">
                            <h4>გაწევრიანება</h4>
                        </div>
                        <b-button
                            v-b-toggle.accordion-4
                            block
                            variant="info"
                            class="w-auto"
                            >Accordion 1</b-button
                        >
                    </b-card-header>
                    <b-collapse
                        id="accordion-4"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                    >
                        <b-card-body>
                            <b-card-text
                                >I start opened because <code>visible</code> is
                                <code>true</code></b-card-text
                            >
                            <b-card-text>{{ aboutUsText }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aboutUsText: `
            საქართველო არის არასამთავრობო, არამომგებიანი პროფესიული ორგანიზაცია, რომელიც დაფუძნდა 1993 წელს, 
            როგორც ძეგლებისა და ღირსშესანიშნავი ადგილების საერთაშორისო საბჭოს (ICOMOS) ეროვნული კომიტეტი. ორგანიზაცია 
            მოწოდებულია ICOMOS-ის ქარტიების, რეკომენდაციებისა და დეკლარაციების შესაბამისად ხელი შეუწყოს კულტურული მემკვიდრეობის 
            კონსერვაციის მაღალი სტანდარტების განვითარებას ადგილობრივ, რეგიონულ და საერთაშორისო დონეზე. ამ მიზნით ICOMOS საქართველო 
            ახორციელებს, უნარ-ჩვევების ამაღლების, გათვითცნობიერების და სპეციფიკურ საპილოტო პროგრამებს/პროექტებს. ICOMOS საქართველო 
            აერთიანებს 22 ინდივიდუალურ და 1 ინსტიტუციურ წევრს და თანამშრომლობს ფართო მრვალდისციპლინარულ პროფესიულ, აკადემიურ წრეებთან 
            და ორგანიზაციებთან, სამოქალაქო საზოგადოებასთან.ICOMOS–ი, ძეგლებისა და ღირსშესანიშნავი ადგილების საერთაშორისო საბჭო, არის 
            გლობალური არასამთავრობო ორგანიზაცია, რომელიც ასოცირებულია UNESCO-სთან. მისი მიზანია ხელი შეუწყოს ძეგლების, შენობათა 
            კომპლექსების და ღირსშესანიშნავი ადგილების კონსერვაციას, დაცვას, გამოყენებას და განვითარებას.  ორგანიზაცია მონაწილეობს დარგის დოქტრინების განვითარებაში, მუშაობს იდეების ევოლუციასა და გავრცელებაზე და წარმართავს ადვოკატირებას. ICOMOS-ი წარმოადგენს მსოფლიო მემკვიდრეობის კომიტეტის მრჩეველ ორგანიზაციას UNESCO-ს მსოფლიო მემკვიდრეობის კონვენციის შესრულებისთვის. ICOMOS-ი ამჟამად აერთიანებს 110 ეროვნულ კომიტეტს და 28 საერთაშორისო სამეცნიერო კომიტეტს.
        `
        };
    }
};
</script>

<style lang="scss" scoped>
.about-us {
    height: 100vh;
    background: #ffffff;
    border-radius: 8px;
    padding: 50px;
    &__container {
        text-align: left;
    }
}
</style>
