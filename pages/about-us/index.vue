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
                        <div class>
                            <h4>ჩვენს შესახებ</h4>
                        </div>
                        <div class @click="toggle('about-us')">
                            <b-button
                                v-b-toggle.accordion-1
                                block
                                variant="info"
                                class="w-auto"
                            >
                                <img
                                    v-if="!isAboutActive"
                                    src="~/assets/img/minus.svg"
                                    alt
                                />
                                <img
                                    v-if="isAboutActive"
                                    src="~/assets/img/plus.svg"
                                    alt
                                />
                            </b-button>
                        </div>
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
                        <div class>
                            <h4>თანამშრომლები</h4>
                        </div>
                        <div class @click="toggle('structure')">
                            <b-button
                                v-b-toggle.accordion-2
                                block
                                variant="info"
                                class="w-auto"
                            >
                                <img
                                    v-if="isStructureActive"
                                    src="~/assets/img/minus.svg"
                                    alt
                                />
                                <img
                                    v-if="!isStructureActive"
                                    src="~/assets/img/plus.svg"
                                    alt
                                />
                            </b-button>
                        </div>
                    </b-card-header>
                    <b-collapse
                        id="accordion-2"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                    >
                        <b-card-body>
                            <b-card-text>{{ partenrsText }}</b-card-text>
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
                        <div class>
                            <h4>ბიოგრაფია</h4>
                        </div>
                        <div class @click="toggle('debuleba')">
                            <b-button
                                v-b-toggle.accordion-3
                                block
                                variant="info"
                                class="w-auto"
                            >
                                <img
                                    v-if="isDebulebaActive"
                                    src="~/assets/img/minus.svg"
                                    alt
                                />
                                <img
                                    v-if="!isDebulebaActive"
                                    src="~/assets/img/plus.svg"
                                    alt
                                />
                            </b-button>
                        </div>
                    </b-card-header>
                    <b-collapse
                        id="accordion-3"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                    >
                        <b-card-body>
                            <b-card-text>{{ biographyText }}</b-card-text>
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
            2000 წლის 19 სექტემბერი, სწორედ ამ დღეს დაფუძნდა სამშენებლო კომპანია
            „ივერთმშენი“ - ედიშერ ჯანჯულიას მიერ. წელს „ივერთმშენის“ 20 წლის იუბილეა.
            „ივერთმშენის“ საქმიანობის ძირითად პროფილს წარმოადგენს საქართველოს საკულტო
            და სხვა ისტორიული ნაგებობების აღდგენა; „ივერთმშენმა“ საქართველოს სხვადასხვა
            კუთხეში ჩვენი სამშობლოს უამრავ ტაძარს დაუბრუნა პირვანდელი სახე და ახალი

            სიცოცხლე შთაბერა მათ.

            განსაკუთრებით აღსანიშნავია „ივერთმშენის“ ხარისხიანი და კვალიფიციური
            საქმიანობა, რომელიც სულ უფრო და უფრო მეტ ნდობას იმსახურებს პირველ რიგში,
            კულტურის სამინისტროსა და ძეგლთა დაცვის სააგენტოს მხრიდან. სამუშაოები

            ძირითადად სრულდება „ქართუს ფონდის“ დაკვეთით.

            „ივერთმშენის“ ბიოგრაფია იწყებოდა შედარებით უმნიშვნელო ობიექტებით, დღეს კი ეს
            სამშენებლო კომპანია ქართული საკულტო და ისტორიული ძეგლების აღდგენის

            გრანდიოზულ პროექტებს წარმატებით ახორციელებს.
        `,

            partenrsText: `
            ამ ოცი წლის განმავლობაში კომპანიაში ჩამოყალიბდა სპეციალისტთა ის ძირითადი
ბირთვი, რომლის მეშვეობით ,,ივერთმშენი“ აღწევს წარმატებაა და ქმნის წინსვლის
მყარი წინაპირობები. ისინი ერთგულად, თავდაუზოგავად უდგანან გვერდით
‘’ივერთმშენს’’ და ღირსეული წვლილი შეაქვთ ჩვენი ქვეყნის აღმშენებლობის,
კონკრეტულად, ისტორიისა და კულტურის ძეგლების აღორძინების საქმეში.
პირველ რიში უნდა აღინიშნოს კომპანიის დირექტორი ედიშერ ჯანჯულია, რომელმაც
„ივერთმშენს“ სული ჩაჰბერა და დღემდე თავდაუზოგადავ მუშობს მისი
განვითარებისთვის. 2000 წლიდან ,,ივერთმშენში“ მუშაობს კონსტრუქტორი ზურაბ
გაჩეჩილაძე, 2002 წლიდან - არქიტექტორ-რესტავრატორი ნანა ინწკირველი, 2013
წლიდან - არქიტექტორ-რესტავრატორი დოდო ჭიკაიძე; სქურის ტაძრის აღდგენიდან
საქმიანობენ ,,ივერთმშენში“ ბორის ბობოხია, გიორგი ჯანჯულია, კოკა ჯანჯულია
(კალისტრატე, უმცროსი); სქურის ტაძრის რესტავრაციაში აქტიურად მონაწილეობდა
სქურელი გია კვარაცხელია; 2016 წლიდან მუშაობენ „ივერთმშენში“ რამაზ კორშია,
ლევან მახათაძე, 2020 წლიდან - სულხან გერზმავა და მამნე კორშია.
ჯერ კიდევ 1997 წლიდან ედიშერის გვერდით დღემდე მუშაობს გამოცდილი

სპეციალისტი, ქვის მხერხავი დავით კანკია.

კომპანიის ცენტრალურ ოფისში 2000 წლიდან მუშაობს ბუღალტერი ნანა ბუდაღაშვილი;
მის გვერდით მუშაობენ ფინანსისტი ლელა გოჩიაშვილი, კომპანიის მენეჯერი რევაზ
კაკაბაძე, არქიტექტორ-რესტავრატორი ელენე კაკაჩია, კომპანიის იურისტი თამარ

ჯანჯულია.
            `,
            biographyText: `
            მეტ-ნაკლები სისრულით ჩამოვთვალოთ ის სამუშაოები, რომლებიც ამ 20 წლის
                განმავლობაში განახორციელა ,,ივერთმშენმა“, და ისინიც, რომლებსაც ამჟამად

                ახორციელებს:

                 2002-2003 წლებში „ივერთმშენმა“ მონაწილეობა მიიღო მცხეთის წმ. ბარბარეს
                სახელობის ტაძრის აღდგენაში;
                 2003 წელს „ივერთმშენმა“ მცხეთის სამთავროს მონასტერში განაახლა მირიან
                მეფისა და ნანა დედოფლის საფლავები;

                2

                 შემდგომ წლებში კომპანია მონაწილეობდა ბოლნისის მუნიციპალიტეტში
                მდებარე წუღრუღაშენის ტაძრის აღდგენით სამუშაოებში;
                 2008 წლის ზაფხულში „ივერთმშენი“ ჩაერთო თბილისის მერიის მიერ
                გამოცხადებულ საჯარო სკოლების რეაბილიტაციის პროგრამაში;
                 იმავე თბილისის მერიის დაკვეთით შესრულებულ იქნა აგრეთვე დედაქალაქის
                პარკების აღდგენა-კეთილმოწყობის სამუშაოები;
                 2009-2010 წლებში „ივერთმშენმა“ მოახდინა დევნილთა ჩასახლების ობიექტების
                აღდგენა-რეაბილიტაცია თბილისის სხვადასხვა რაიონში;
                 2011 წელს, შესრულდა სარეაბილიტაციო სამუშაოები გელათის სამონასტრო
                კომპლექსის გაბრიელ ქიქოძის სავანეში.
                 2011 წელს „ივერთმშენისთვის“ არანაკლებ მნიშვნელოვანი იყო უფლისციხის
                მუზეუმ-ნაკრძალის ინფრასტრუქტურის მოწყობის სამუშაოების მეორე ეტაპის
                ტენდერის მოგება და სამუშაოების შესრულება.
                 2012 წლის დასაწყისში შესრულდა სარეაბილიტაციო სამუშაოები საგარეჯოს
                მუნიციპალიტეტში, კაწარეთის სამების ტაძარში;
                 2012 წელს ფუძნარის ღვთისმშობლის სახელობის ტაძარი, რომელიც
                „ივერთმშენის“ სავიზიტო ბარათად იქცა.
                 2014 წელს სამშენებლო კომპანიამ მონაწილეობა მიიღო სქურის ბაზილიკური
                ტაძრის აღდგენაში.
                 სქურის აღდგენა-რესტავრაციის სამუშაოების პარალელურად „ივერთმშენმა“
                განახორციელა სენაკის რაიონში ეკის მაცხოვრის ჯვრის სახელობის ტაძრის
                რესტავრაცია;
                 ამავე პერიოდში „ივერთმშენის“ მიერ განხორციელდა კვაუთის
                მთავარანგელოზის სახელობის ტაძრის აღდგენა სენაკის მუნიციპალიტეტში;
                 სარესტავრაციო სამუშაოები ჩაუტარდა ნაგარევის მთავარანგელოზის ტაძარს
                თერჯოლის მუნიციპალიტეტში;
                 2016 წელს ჩატარდა წალენჯიხის ფერისცვალების ტაძრის სარეაბილიტაციო
                სამუშაოები;
                 ამავე პერიოდს ეკუთვნის „ივერთმშენის“ მიერ განხორციელებული სამუშაოები
                საქართველოს თავდაცვის სამინისტროს ობიექტებზე;
                 2016 წელს კომპანია მონაწილეობს თბილისში ნარიყალის ციხის
                სარეაბილიტაციო სამუშაოებში;
                 ამავე წელს შესრულდა ბათუმის ოფიცერთა სახლის სარეაბილიტაციო
                სამუშაოები;
                 2016 წელსვე კომპანიამ აღდგენითი სამუშაოები ჩაუტარა მახინჯაურში მდებარე
                რომანოვების სასახლეს;
                 2016 წლიდან დღემდე კომპანია „ივერთმშენი“ თავისი ბიოგრაფიის ყველაზე
                მნიშვნელოვან და საპასუხისმგებლო მისიას ასრულებს ისეთი გრანდიოზული
                ძეგლების აღდგენა-რესტავრაციის სახით, როგორიცაა აწყურის ღვთისმშობლის

                3

                სახელობის ტაძარი და აწყურის ციხე ახალციხის მუნიციპალიტეტში. სწორედ
                აწყურის ციხე და ტაძარი იქნება „ივერთმშენის“ ახალი სავიზიტო ბარათი.

                ჯერ კიდევ სქურის ეკლესიის აღდგენის დროს დღის წესრიგში დადგა
                აუცილებლობა იმისა, რომ კომპანიას ჰქონოდა საკუთარი ქვის სახერხი ქარხანა
                და, შესაბამისად, სამშენებლო ქვის კარიერი. აწყურის ციხე-ტაძრისა და სხვა
                ობიექტების სამუშაოთა მასშტაბებმა ეს აუცილებლობა რეალობად აქცია:
                კომპანიამ აღნიშნულ ობიექტებთან ახლოს კარიერი შეიძინა და იქვე, აწყურში,
                მტკვრის ნაპირას, ციხიდან და ტაძრიდან რამდენიმე ასეულ მეტრში, ქვის
                სახერხი ქარხანაც მოაწყო თანამედროვე მანქანა-დანადგარებით; საზღვარგარეთ
                შეიძინეს 35-ტონიანი ტრაქტორი, ექსკავატორი 80 ათას ევროდ, აქვთ საკუთარი
                ამწე და ა.შ. ერთი სიტყვით, კომპანია დამოკიდებული არ არის გარეშე
                ორგანიზაციებზე და თვითონვე უზრუნველყოფს საკუთარ ობიექტებს ქვის
                მასალით.

                 აწყურის ტაძრისა და ციხის აღდგენითი სამუშაოები თავიანთი მოცულობით
                შედარებით გრძელვადიანია და მათ პარალელურად „ივერთმშენი“ ბევრ სხვა
                სამუშაოსაც ასრულებს, ბევრის დასრულებაც უკვე მოასწრო. განსაკუთრებით
                უნდა აღვნიშნოთ 2018 წლიდან მიმდინარე თბილისის ოპერისა და ბალეტის
                თეატრის შენობის საძირკვლის გამაგრებითი სამუშაოები, რაც თავისი
                მნიშვნელობით მეტად საპასუხისმგებლოა;
                 2018 წელს რესტავრაცია ჩაუტარდა მთავარანგელოზ მიქაელის სახელობის
                ტაძარს ჩხოროწყუს მუნიციპალიტეტის სოფელ ჭოღაში;
                 ამავე წელს ჩხოროწყუს მუნიციპალიტეტის სოფელ თაიაში სარეაბილიტაციო
                სამუშაოები ჩაუტარდა ოცინდალეს წმ. გიორგის ტაძარს;
                 ჩხოროწყუში მიმდინარეობს აგრეთვე მოიდანახეს ტაძრის აღდგენა;
                 2018 წელს დაიწყო საპროექტო სამუშაოები ბიეთის ღვთისმშობლის სახელობის
                ტაძრის აღსადგენად ახალციხის მუნიციპალიტეტში; ამჟამად მიმდინარეობს ამ
                ტაძრის აღდგენის სამუშაოები;
                 2019 წლიდან მიმდინარეობს აბასთუმნის დედათა მონასტრის რომანოვების
                ყოფილი სასახლის სარეაბილიტაციო სამუშაოები;
                 2019 წლიდან ხორციელდება აგარის ღვთისმშობლის სახელობის ეკლესიის
                სამრეკლოს აღდგენა მდ.ურაველის ხეობაში, ახალციხის მუნიციპალიტეტში;

                 2019 წელს სარესტავრაციო სამუშაოები ჩაუტარდა ნიკო ლომოურის სახლ-
                მუზეუმს გორის მუნიციპალიტეტის სოფელ არბოში;
            `,
            isAboutActive: false,
            isStructureActive: false,
            isDebulebaActive: false,
            isTeamActive: false,
        }
    },
    methods: {
        toggle(type) {
            switch (type) {
                case 'about-us':
                    this.isAboutActive = !this.isAboutActive
                    break

                case 'structure':
                    this.isStructureActive = !this.isStructureActive
                    break
                case 'debuleba':
                    this.isDebulebaActive = !this.isDebulebaActive
                    break
                case 'gawevrianeba':
                    this.isTeamActive = !this.isTeamActive
                    break
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.about-us {
    // height: 100vh;
    background: #ffffff;
    border-radius: 8px;
    padding: 50px;
    &__container {
        text-align: left;

        button {
            background: transparent !important;
            border: none;
            outline: none;
            box-shadow: none !important;
            height: 8px !important;
            padding: 0;
        }
    }
}
</style>
