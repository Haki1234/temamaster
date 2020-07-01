<template>
<div class="row">
    <div class="col-sm-12">
        <h3>Detyra per tu berë.</h3>
        <div class="progress md-progress" style="height: 20px">
            <div class="progress-bar" role="progressbar" style="width: 25%; height: 20px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
            :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
                {{quoteCount}}/{{maxQuotes}}
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        props: ['quoteCount','maxQuotes']
    }
</script>
