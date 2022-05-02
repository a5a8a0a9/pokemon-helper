<template>
  <div class="page-card">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: 'https://www.googleapis.com/calendar/v3/users/me/calendarList'
      // api: 'https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId',
      // calendarId: 'stupid80096@gmail.com'
    }
  },
  methods: {
    async getCalendarList() {
      // const authResponse = await this.axios({
      //   url: 'https://www.googleapis.com/auth/calendar',
      //   method: 'get'
      // })
      // console.log(authResponse)
      // const { data: response } = await this.axios({
      //   url: this.api,
      //   method: 'get'
      // })
      // console.log(response)
    }
  },
  created() {
    this.getCalendarList()
  }
}
</script>
