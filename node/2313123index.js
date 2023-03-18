var ff={
    "condition": {
        "left": {
            "left": {
                "query": "Claim.ReceiptDate",
                "innerExpressions": null,
                "type": 2
            },
            "operator": 1,
            "right": {
                "value": "2022-09-01T00:00:00Z",
                "dataType": 3,
                "innerExpressions": null,
                "type": 1
            },
            "innerExpressions": null,
            "type": 3
        },
        "operator": 1,
        "right": {
            "left": {
                "query": "Claim.ReceiptDate",
                "innerExpressions": null,
                "type": 2
            },
            "operator": 1,
            "right": {
                "value": "2022-09-07T00:00:00Z",
                "dataType": 3,
                "innerExpressions": null,
                "type": 1
            },
            "innerExpressions": null,
            "type": 3
        },
        "innerExpressions": null,
        "type": 4
    },
    "then": {
        "value": [
            "6eadf419-0dbe-441d-9c14-7f725741aabb",
            "00000000-0000-0000-0000-000000000000",
            "e14394c5-88ce-4400-be74-f52165d8a57b",
            "e34bacef-9ab5-4838-b549-3511f5cbbbea"
        ],
        "dataType": 15,
        "innerExpressions": [
            {
                "value": 33,
                "dataType": 1,
                "innerExpressions": null,
                "type": 1
            },
            {
                "value": 34,
                "dataType": 1,
                "innerExpressions": null,
                "type": 1
            },
            {
                "value": 34,
                "dataType": 1,
                "innerExpressions": null,
                "type": 1
            },
            {
                "value": 22,
                "dataType": 1,
                "innerExpressions": null,
                "type": 1
            }
        ],
        "type": 1
    },
    "else": {
        "type": 8,
        "condition": {
            "left": {
                "query": "Claim.SubmissionDate",
                "innerExpressions": null,
                "type": 2
            },
            "operator": 1,
            "right": {
                "value": "2022-09-14T00:00:00Z",
                "dataType": 3,
                "innerExpressions": null,
                "type": 1
            },
            "innerExpressions": null,
            "type": 3
        },
        "then": {
            "value": [
                "00000000-0000-0000-0000-000000000000",
                "e14394c5-88ce-4400-be74-f52165d8a57b"
            ],
            "dataType": 15,
            "innerExpressions": [
                {
                    "value": 11,
                    "dataType": 1,
                    "innerExpressions": null,
                    "type": 1
                },
                {
                    "type": 10,
                    "dataType": 1,
                    "value": null
                }
            ],
            "type": 1
        },
        "else": {
            "value": [
                "b8cc250f-9602-414c-8891-a1ee442db648"
            ],
            "dataType": 15,
            "innerExpressions": [
                {
                    "value": 44,
                    "dataType": 1,
                    "innerExpressions": null,
                    "type": 1
                }
            ],
            "type": 1
        }
    },
    "innerExpressions": null,
    "type": 8
}