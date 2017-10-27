var APP_DATA = {
  "scenes": [
    {
      "id": "0-l_o",
      "name": "L_O",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3557544931805623,
          "pitch": 0.25269668450982863,
          "rotation": 0,
          "target": "1-l_f"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.13010198404742823,
          "pitch": -0.042337214707568904,
          "title": "Title",
          "text": ""
        }
      ]
    },
    {
      "id": "1-l_f",
      "name": "L_F",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.643282550265905,
          "pitch": 0.15395827991665278,
          "rotation": 0,
          "target": "0-l_o"
        },
        {
          "yaw": -0.41001320875493263,
          "pitch": 0.37982493043988086,
          "rotation": 0,
          "target": "2-l_m"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-l_m",
      "name": "L_M",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.042642587280863,
          "pitch": 0.35087425407190764,
          "rotation": 0,
          "target": "1-l_f"
        },
        {
          "yaw": -1.7974235979309476,
          "pitch": 0.4586539534024112,
          "rotation": 0,
          "target": "3-l_b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-l_b",
      "name": "L_B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.986389506891614,
          "pitch": 0.5282214971298878,
          "rotation": 0,
          "target": "2-l_m"
        },
        {
          "yaw": -1.2074493252497653,
          "pitch": 0.26252857218917214,
          "rotation": 0,
          "target": "4-r_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-r_1",
      "name": "R_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1242297068638383,
          "pitch": 0.35665947923110153,
          "rotation": 0,
          "target": "3-l_b"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
