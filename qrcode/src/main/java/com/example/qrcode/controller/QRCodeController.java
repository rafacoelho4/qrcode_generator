package com.example.qrcode.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("qrcode")
public class QRCodeController {

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public String getQRCode(@RequestBody (required=false)String data) {
        return "https://qrtag.net/api/qr_12.png?url=" + data;
    }

}
