<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">Regular & Special Meetings</div>
            <div class="left">
                <v-ons-back-button
                    onclick="fn.pushPage({'id': 'reportLandingPage.html', 'title': 'reportLandingPage'})">Back
                </v-ons-back-button>
            </div>
        </v-ons-toolbar>
        
        <div>
            <v-ons-list>
                <v-ons-list-header class="heading-title">Meetings</v-ons-list-header>
                <v-ons-list-item>
                <ons-input class="input-field" modifier="material" placeholder="Actual"></ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <ons-input class="input-field" modifier="material" placeholder="Average Attendance">
                </v-ons-list-item>
                <v-ons-button class="button-margin next-button"
                    onclick="fn.pushPage({'id': 'teaching.html', 'title': 'teaching'})">
                    Save
                </v-ons-button>
            </v-ons-list>
        </div>
    </v-ons-page>
</template>