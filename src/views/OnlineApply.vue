<template>
    <!--nav end-->
    <!-- 主視覺 -->
    <div class="shortKv">
        <div class="fill-shortKv topimg-OnLineApply">
            <div class="container-xl shortKv-title-4">
                <h2>線上辦卡</h2>
            </div>
        </div>
    </div>
    <!-- //主視覺 -->
    <!-- 主要內容 -->
    <section class=" mainArea">
        <div class="container-xl">
            <div class="row justify-content-md-center">
                <div class="col-lg-10">
                    <div class="row justify-content-md-center">
                        <div class="col-md-6 text-center pt-4">
                            <div class="Apply_Box">
                                <div class="item">
                                    <h3>我是聯邦卡友/存戶</h3>
                                    <router-link to="/OnLineApply_y" class="btn btn-primary btn-lg rounded-pill">
                                        立即加辦卡
                                        <i class="fa fa-arrow-circle-right"></i>
                                    </router-link>
                                    <br>
                                    <h4>※ 貼心提醒
                                    <br>存戶身份不含數位存款戶。
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-center pt-4">
                            <div class="Apply_Box">
                                <div class="item">
                                    <h3>我不是聯邦卡友</h3>
                                    <router-link to="/OnLineApply_n"  class="btn btn-primary btn-lg rounded-pill" >
                                        我 要 辦 卡
                                        <i class="fa fa-arrow-circle-right"></i>
                                    </router-link><br>
                                    <h4>※ 貼心提醒<br>請準備好您的身份證與財力證明(如存摺、扣繳憑單、地價稅單和房屋稅單或建物權狀)，以加速辦卡流程。</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- 主要內容 END -->
</template>
